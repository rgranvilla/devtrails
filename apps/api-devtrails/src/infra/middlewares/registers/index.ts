import { env } from '@devtrails/env'
import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import type { FastifyInstance } from 'fastify'
import multer from 'fastify-multer'
import { jsonSchemaTransform } from 'fastify-type-provider-zod'

import { appRoutes } from '@/application/routes'
import { normalizeFileFields } from '@/shared/utils/normalize-file-fields'

export function registerMiddlewares(app: FastifyInstance) {
  app.register(fastifyCors)

  app.register(multer.contentParser)

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Devtrails API Users',
        description: 'The users management services.',
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

  app.register(fastifyCookie)

  app.register(appRoutes)
}
