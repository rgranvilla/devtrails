import { type FastifyError, FastifyReply, FastifyRequest } from 'fastify'

import {
  AuthError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from './custom-errors'

export type ValidationErrorParams = {
  issue: {
    validation: string // "regex"
    code: string // "invalid_string"
    message: string // The validation message for the error
    path: string[] // ["password"]
  }
}

export type ValidationErrorDetail = {
  keyword: string // "invalid_string"
  instancePath: string // "/password"
  schemaPath: string // "#/password/invalid_string"
  params: ValidationErrorParams
  message: string
}

export function handleError(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { validation, validationContext, code, statusCode } = error

  // Handle validation errors
  if (validation && validationContext === 'body') {
    reply.status(400).send({
      error: 'Validation Error',
      message: error.message,
      details: validation,
    })
    return
  }

  // Handle Fastify-specific errors
  if (code && code.startsWith('FST_ERR')) {
    reply.status(statusCode || 500).send({
      error: 'Fastify Error',
      code,
      message: error.message,
    })
    return
  }

  if (error instanceof ValidationError) {
    reply.status(400).send({
      error: 'Validation Error',
      message: error.message,
      details: error.details,
    })
    return
  }

  if (error instanceof AuthError) {
    reply.status(401).send({
      error: 'Authentication Error',
      message: error.message,
    })
    return
  }

  if (error instanceof ForbiddenError) {
    reply.status(403).send({
      error: 'Forbidden Error',
      message: error.message,
    })
    return
  }

  if (error instanceof NotFoundError) {
    reply.status(404).send({
      error: 'Not Found Error',
      message: error.message,
    })
    return
  }

  if (error instanceof ConflictError) {
    reply.status(409).send({
      error: 'Conflict Error',
      message: error.message,
    })
    return
  }

  // Generic 500 Internal Server Error
  reply.status(500).send({
    error: 'Internal Server Error',
    message: 'Something went wrong.',
  })
}
