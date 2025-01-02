import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { ValidationErrorDetailSchema } from '@/shared/errors/schema-errors'

import { authenticateWithCredentialsController } from '../controllers/authenticate-with-password'
import { refreshTokensController } from '../controllers/refresh-token-controller'
import { authenticateCredentialsBodySchema } from '../dtos/authenticate-credentials.dto'

export async function sessionsRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/credentials',
    handler: authenticateWithCredentialsController,
    schema: {
      tags: ['Sessions'],
      summary: 'Authenticate with Credentials.',
      body: authenticateCredentialsBodySchema,
      response: {
        201: z
          .object({
            token: z.string(),
            refreshToken: z.string(),
          })
          .describe('Session authenticated.'),
        400: z
          .object({
            error: z.string(),
            message: z.string(),
            details: z.union([z.array(ValidationErrorDetailSchema), z.any()]),
          })
          .describe('Validation error'),
        401: z
          .object({
            error: z.string(),
            message: z.string(),
          })
          .describe('Unauthorized error'),
        409: z
          .object({
            error: z.string(),
            message: z.string(),
          })
          .describe('Conflict error'),
        500: z
          .object({
            error: z.string(),
            message: z.string(),
          })
          .describe('Internal Server Error'),
      },
    },
  })

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/refresh-token',
    handler: refreshTokensController,
    schema: {
      tags: ['Sessions'],
      summary: 'Refresh token.',
      body: z
        .object({
          refreshToken: z.string(),
          userId: z.string().uuid(),
        })
        .strict(),
      response: {
        201: z
          .object({
            token: z.string(),
            refreshToken: z.string(),
          })
          .describe('Session authenticated.'),
        400: z
          .object({
            error: z.string(),
            message: z.string(),
            details: z.union([z.array(ValidationErrorDetailSchema), z.any()]),
          })
          .describe('Validation error'),
        401: z
          .object({
            error: z.string(),
            message: z.string(),
          })
          .describe('Unauthorized error'),
        409: z
          .object({
            error: z.string(),
            message: z.string(),
          })
          .describe('Conflict error'),
        500: z
          .object({
            error: z.string(),
            message: z.string(),
          })
          .describe('Internal Server Error'),
      },
    },
  })
}
