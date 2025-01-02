import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

import { RefreshTokenUseCase } from '@/domain/use-cases/sessions/refresh-token-use-case'
import { PrismaSessionsRepository } from '@/infra/repositories/prisma/prismaSessionsRepository'
import { PrismaUsersRepository } from '@/infra/repositories/prisma/prismaUsersRepository'
import { handleError } from '@/shared/errors/handle-error'

import { refreshTokensBodySchema } from '../dtos/refresh-token.dto'

export async function refreshTokensController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { refreshToken, userId } = refreshTokensBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const sessionsRepository = new PrismaSessionsRepository()
    const refreshTokenUseCase = new RefreshTokenUseCase(
      usersRepository,
      sessionsRepository,
      reply,
    )

    const { token } = await refreshTokenUseCase.execute(refreshToken, userId)

    return reply.status(201).send({ token, refreshToken })
  } catch (error) {
    handleError(error as FastifyError, request, reply)
  }
}
