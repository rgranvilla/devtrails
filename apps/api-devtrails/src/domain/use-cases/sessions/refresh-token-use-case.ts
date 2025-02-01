import { env } from '@devtrails/env'
import dayjs from 'dayjs'
import type { FastifyReply } from 'fastify'

import type { ISessionsRepository } from '@/infra/repositories/ISessionsRepository'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'
import { ForbiddenError, NotFoundError } from '@/shared/errors/custom-errors'

interface IRefreshTokenResponse {
  token: string
}

export class RefreshTokenUseCase {
  private usersRepository: IUsersRepository
  private sessionsRepository: ISessionsRepository
  private reply: FastifyReply

  constructor(
    usersRepository: IUsersRepository,
    userSessionsRepository: ISessionsRepository,
    reply: FastifyReply,
  ) {
    this.usersRepository = usersRepository
    this.sessionsRepository = userSessionsRepository
    this.reply = reply
  }

  async execute(
    refreshToken: string,
    userId: string,
  ): Promise<IRefreshTokenResponse> {
    console.info('[INITIALE REFRESH USE CASE]')
    const session =
      await this.sessionsRepository.findByRefreshToken(refreshToken)

    if (!session) {
      throw new NotFoundError()
    }

    if (session.userId !== userId) {
      throw new ForbiddenError()
    }

    const newDate = dayjs().toDate()
    const expiresDateIsAfter = dayjs(newDate).isAfter(
      dayjs(session.expiresDate),
    )

    console.info('[CHECKING EXPIRATION DATE]', expiresDateIsAfter)

    if (expiresDateIsAfter && session.refreshToken === refreshToken) {
      console.info('[TOKEN EXPIRED - REFRESHING]')
      const newToken = await this.reply.jwtSign(
        {
          sub: userId,
        },
        {
          expiresIn: `${env.JWT_EXPIRES_IN_SECONDS}s`,
        },
      )
      await this.sessionsRepository.refreshToken(refreshToken, newToken)

      return {
        token: newToken,
      }
    }

    if (!expiresDateIsAfter && session.refreshToken === refreshToken) {
      console.info('[TOKEN NOT EXPIRED]')
      return {
        token: session.token,
      }
    }
    throw new ForbiddenError('Invalid token')
  }
}
