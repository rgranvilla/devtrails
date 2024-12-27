import { env } from '@devtrails/env'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import type { FastifyInstance } from 'fastify'
import multer from 'fastify-multer'
import { jsonSchemaTransform } from 'fastify-type-provider-zod'

import { normalizeFileFields } from '@/core/utils/normalize-file-fields'

export function registerMiddlewares(app: FastifyInstance) {
  app.register(fastifyCors)

  app.register(multer.contentParser)

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
}
