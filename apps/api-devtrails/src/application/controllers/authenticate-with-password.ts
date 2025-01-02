import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

import { AuthenticateCredentialsUseCase } from '@/domain/use-cases/sessions/authenticate-credentials-use-case'
import { PrismaSessionsRepository } from '@/infra/repositories/prisma/prismaSessionsRepository'
import { PrismaUsersRepository } from '@/infra/repositories/prisma/prismaUsersRepository'
import { handleError } from '@/shared/errors/handle-error'

import { authenticateCredentialsBodySchema } from '../dtos/authenticate-credentials.dto'

export async function authenticateWithCredentialsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password } = authenticateCredentialsBodySchema.parse(
    request.body,
  )

  try {
    const usersRepository = new PrismaUsersRepository()
    const sessionsRepository = new PrismaSessionsRepository()
    const authenticateCredentialsUseCase = new AuthenticateCredentialsUseCase(
      usersRepository,
      sessionsRepository,
      reply,
    )

    const { token, refreshToken } =
      await authenticateCredentialsUseCase.execute(email, password)

    return reply.status(201).send({ token, refreshToken })
  } catch (error) {
    handleError(error as FastifyError, request, reply)
  }
}
