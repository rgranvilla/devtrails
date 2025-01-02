import type { FastifyReply } from 'fastify'

import type { ISessionsRepository } from '@/infra/repositories/ISessionsRepository'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'
import { ForbiddenError, NotFoundError } from '@/shared/errors/custom-errors'
import { CryptoHelper } from '@/shared/utils/crypto-helper'

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
    const session =
      await this.sessionsRepository.findByRefreshToken(refreshToken)

    if (!session) {
      throw new NotFoundError()
    }

    if (session.userId !== userId) {
      throw new ForbiddenError()
    }

    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new NotFoundError('User not found')
    }

    const encryptData = new CryptoHelper()
    const encryptedData = await encryptData.encryptData(user)

    const token = await this.reply.jwtSign({
      sub: session.userId,
      data: encryptedData,
    })

    const { token: newToken } = await this.sessionsRepository.refreshToken(
      session.id,
      token,
    )

    return {
      token: newToken,
    }
  }
}
