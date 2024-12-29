import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { ValidationErrorDetailSchema } from '@/shared/errors/schema-errors'

import { createUserController } from '../controllers/create-user/create-user-controller'
import { createUserBodySchema } from '../dtos/create-user.dto'

export async function usersRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/',
    handler: createUserController,
    schema: {
      tags: ['Users'],
      summary: 'Create a new user.',
      body: createUserBodySchema,
      response: {
        201: z
          .object({
            id: z.string().uuid(),
            username: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            email: z.string().email(),
            password: z.string(),
            avatarUrl: z.string().nullable(),
            createdAt: z.date(),
            updatedAt: z.date(),
            deletedAt: z.date().nullable(),
          })
          .describe('User successfully created'),
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
