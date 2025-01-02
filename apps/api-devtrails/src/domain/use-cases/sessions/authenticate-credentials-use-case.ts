import { env } from '@devtrails/env'
import { compare } from 'bcryptjs'
import type { FastifyReply } from 'fastify'

import { Session } from '@/domain/entities/session'
import type { ISessionsRepository } from '@/infra/repositories/ISessionsRepository'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'
import { AuthError, ConflictError } from '@/shared/errors/custom-errors'
import { CryptoHelper } from '@/shared/utils/crypto-helper'

interface IAuthenticateCredentialsResponse {
  token: string
  refreshToken: string
}

export class AuthenticateCredentialsUseCase {
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
    email: string,
    password: string,
  ): Promise<IAuthenticateCredentialsResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AuthError('Invalid credentials')
    }

    if (user.password === null) {
      throw new ConflictError('User does not have a password, use social login')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AuthError('Invalid credentials')
    }

    const userData = {
      userId: user.id,
      username: user.username,
      email: user.email,
      createAt: user.createdAt,
      updatedAt: user.updatedAt,
    }

    const encryptData = new CryptoHelper()
    const encryptedData = await encryptData.encryptData(userData)

    const token = await this.reply.jwtSign(
      {
        sub: user.id,
        data: encryptedData,
      },
      {
        sign: {
          expiresIn: `${env.JWT_EXPIRES_IN_SECONDS}s`,
        },
      },
    )

    const expiresDate = new Date(Date.now() + 1000 * env.JWT_EXPIRES_IN_SECONDS)

    const refreshToken = await this.reply.jwtSign(
      {
        sub: user.id,
      },
      {
        sign: {
          expiresIn: `${env.JWT_REFRESH_EXPIRES_IN_SECONDS}s`,
        },
      },
    )

    const userToken = new Session({
      userId: user.id,
      token,
      refreshToken,
      expiresDate,
      provider: 'CREDENTIALS',
      type: 'ACCESS',
    })

    await this.sessionsRepository.create(userToken)

    return {
      token,
      refreshToken,
    }
  }
}
