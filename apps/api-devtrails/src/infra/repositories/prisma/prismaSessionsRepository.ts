import { env } from '@devtrails/env'
import dayjs from 'dayjs'

import type { Session } from '@/domain/entities/session'
import { prisma } from '@/infra/database/prisma'
import { SessionMapper } from '@/infra/mappers/sessionMapper'

import type { ISessionsRepository } from '../ISessionsRepository'

export class PrismaSessionsRepository implements ISessionsRepository {
  async create(data: Session): Promise<Session> {
    await prisma.session.deleteMany({
      where: {
        userId: data.userId,
      },
    })

    const raw = SessionMapper.toDatabase(data)

    const createdSession = await prisma.session.create({
      data: raw,
    })

    return SessionMapper.toDomain(createdSession)
  }

  async refreshToken(refreshToken: string, newToken: string): Promise<Session> {
    const updatedSession = await prisma.session.update({
      where: {
        refreshToken,
      },
      data: {
        token: newToken,
        expiresDate: dayjs()
          .add(env.JWT_EXPIRES_IN_SECONDS, 'seconds')
          .toDate(),
        type: 'REFRESH',
      },
    })

    return SessionMapper.toDomain(updatedSession)
  }

  async revokeToken(refreshToken: string): Promise<void> {
    await prisma.session.delete({
      where: {
        refreshToken,
      },
    })
  }

  async findByRefreshToken(refreshToken: string): Promise<Session | null> {
    const existentSession = await prisma.session.findUnique({
      where: {
        refreshToken,
      },
    })

    if (!existentSession) return null

    return SessionMapper.toDomain(existentSession)
  }
}
