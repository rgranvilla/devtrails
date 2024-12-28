import type { FastifyInstance } from 'fastify'
import {
  hasZodFastifySchemaValidationErrors,
  isResponseSerializationError,
} from 'fastify-type-provider-zod'
import { ZodError } from 'zod'

import { BadRequestError } from '@/shared/errors/custom-errors/bad-request-error'
import { UnauthorizedError } from '@/shared/errors/custom-errors/unauthorized-error'

import { AlreadyInUseError } from './custom-errors/already-in-use-error'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  const requestLog = {
    endpoint: request.url,
    method: request.method,
    timestamp: Date.now(),
  }

  // send error to some observability platform
  console.error(JSON.stringify(error))

  if (error instanceof ZodError) {
    reply.status(400).send({
      error: 'Bad Request',
      message: error.flatten().fieldErrors,
      status: 400,
      ...requestLog,
    })
    return
  }

  if (error instanceof BadRequestError) {
    reply.status(400).send({
      error: 'Bad Request',
      message: error.validation?.map((err) => ({
        field: err.instancePath.replace('/', ''),
        message: err.message,
      })),
      status: 400,
      ...requestLog,
    })
    return
  }

  if (error instanceof UnauthorizedError) {
    reply.status(401).send({
      error: 'Unauthorized',
      // message: error.message,
      status: 401,
      ...requestLog,
    })
    return
  }

  if (error instanceof AlreadyInUseError) {
    reply.status(409).send({
      error: 'Not Available',
      // message: error.message,
      status: 409,
      ...requestLog,
    })
    return
  }

  if (hasZodFastifySchemaValidationErrors(error)) {
    reply.status(400).send({
      error: 'Bad Request',
      message: error.validation?.map((err) => ({
        field: err.instancePath.replace('/', ''),
        message: err.message,
      })),
      status: 400,
      ...requestLog,
    })
    return
  }

  if (isResponseSerializationError(error)) {
    reply.status(500).send({
      error: 'Internal Server Error',
      message: error.validation?.map((err) => ({
        field: err.instancePath.replace('/', ''),
        message: err.message,
      })),
      status: 500,
      ...requestLog,
    })
    return
  }

  reply.status(500).send({ message: 'Internal server error' })
}
