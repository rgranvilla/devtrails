import { env } from '@devtrails/env'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastify from 'fastify'
import multer from 'fastify-multer'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { errorHandler } from './error-handler';

const app = fastify().withTypeProvider<ZodTypeProvider>()

const normalizeFileFields = (obj: Record<string, any>) => {
  let routeContainsFile = false

  if (
    Object.prototype.hasOwnProperty.call(obj, 'consumes') &&
    obj.consumes.includes('multipart/form-data')
  ) {
    routeContainsFile = true
  }

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (key === 'body' && routeContainsFile) {
        obj[key] = {
          type: 'object',
          required: ['file'],
          properties: {
            file: { type: 'file' },
          },
        }
      } else {
        normalizeFileFields(obj[key])
      }
    }
  }

  return obj
}

app.register(multer.contentParser)

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.setErrorHandler(errorHandler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Devtrails Core API',
      description:
        'API DevTrails Core - A API central para gerenciar autenticação, autorização e recursos essenciais de suas aplicações. Responsável pelo gerenciamento completo de usuários e organizações, oferece suporte a todo o ciclo de vida de contas, incluindo criação, atualização, exclusão e recuperação. Com funcionalidades robustas de autenticação e autorização, atua como o gateway principal para integrar e orquestrar serviços relacionados, garantindo segurança e eficiência no funcionamento das nossas aplicações.',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  transform: (data) => {
    const jsonSchema = jsonSchemaTransform(data)

    normalizeFileFields(jsonSchema.schema)

    return jsonSchema
  },
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(fastifyCors)

app.listen({ port: env.SERVER_PORT }).then(() => {
  console.log(`Server is running on http://localhost:${env.SERVER_PORT}`)
  console.log(`Swagger is running on http://localhost:${env.SERVER_PORT}/docs`)
})
