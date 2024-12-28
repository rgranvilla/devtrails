import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

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
            isSuperAdmin: z.boolean().default(false),
            createdAt: z.date(),
            updatedAt: z.date(),
            deletedAt: z.date().nullable(),
          })
          .describe('User successfully created'),
        400: z
          .object({
            error: z.string(),
            message: z.array(
              z.object({
                field: z.string(),
                message: z.string(),
              }),
            ),
            status: z.coerce.number(),
            endpoint: z.string(),
            method: z.string(),
            timestamp: z.coerce.number(),
          })
          .describe('Validation error'),
        409: z
          .object({
            error: z.string(),
            message: z.string(),
            status: z.coerce.number(),
            endpoint: z.string(),
            method: z.string(),
            timestamp: z.coerce.number(),
          })
          .describe('Conflict error (e.g., duplicate user)'),
        500: z
          .object({
            error: z.string(),
            message: z.string(),
            status: z.coerce.number(),
            endpoint: z.string(),
            method: z.string(),
            timestamp: z.coerce.number(),
          })
          .describe('Internal Server Error'),
      },
    },
  })
}
