import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { auth } from '@/infra/middlewares/auth'
import { verifyJWT } from '@/infra/middlewares/verifyJWT'
import { ValidationErrorDetailSchema } from '@/shared/errors/schema-errors'

import { createUserController } from '../controllers/create-user-controller'
import { getAllUsersController } from '../controllers/get-all-users-controller'
import { getUserController } from '../controllers/get-user-controller'
import { updateUserController } from '../controllers/update-user-controller'
import { createUserBodySchema } from '../dtos/create-user.dto'
import { updateUserBodySchema } from '../dtos/update-user.dto'

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

  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .route({
      method: 'PUT',
      url: '/',
      handler: updateUserController,
      schema: {
        tags: ['Users'],
        summary: 'Update an user.',
        security: [{ bearerAuth: [] }],
        body: updateUserBodySchema,
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
            .describe('User successfully updated'),
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
          403: z
            .object({
              error: z.string(),
              message: z.string(),
            })
            .describe('Forbidden error'),
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
    method: 'GET',
    url: '/:id',
    handler: getUserController,
    schema: {
      tags: ['Users'],
      summary: 'Get an user.',
      params: z.object({
        id: z.string().uuid(),
      }),
      response: {
        201: z
          .object({
            id: z.string().uuid(),
            username: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            email: z.string().email(),
            avatarUrl: z.string().nullable(),
            createdAt: z.date(),
            updatedAt: z.date(),
            deletedAt: z.date().nullable(),
          })
          .describe('User successfully updated'),
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
        403: z
          .object({
            error: z.string(),
            message: z.string(),
          })
          .describe('Forbidden error'),
        500: z
          .object({
            error: z.string(),
            message: z.string(),
          })
          .describe('Internal Server Error'),
      },
    },
  })

  app
    .withTypeProvider<ZodTypeProvider>()
    .register(verifyJWT)
    .route({
      method: 'GET',
      url: '/',
      handler: getAllUsersController,
      schema: {
        tags: ['Users'],
        summary: 'Get all users.',
        security: [{ bearerAuth: [] }],
        response: {
          201: z
            .object({
              users: z.array(
                z.object({
                  id: z.string().uuid(),
                  username: z.string(),
                  firstName: z.string(),
                  lastName: z.string(),
                  email: z.string().email(),
                  avatarUrl: z.string().nullable(),
                  createdAt: z.date(),
                  updatedAt: z.date(),
                  deletedAt: z.date().nullable(),
                }),
              ),
            })
            .describe('Users successfully getted'),
          401: z
            .object({
              error: z.string(),
              message: z.string(),
            })
            .describe('Unauthorized error'),
          403: z
            .object({
              error: z.string(),
              message: z.string(),
            })
            .describe('Forbidden error'),
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
