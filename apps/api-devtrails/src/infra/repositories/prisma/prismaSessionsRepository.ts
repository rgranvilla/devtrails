import type { Session } from '@/domain/entities/session'
import { prisma } from '@/infra/database/prisma'
import { SessionMapper } from '@/infra/mappers/sessionMapper'

import type { ISessionsRepository } from '../ISessionsRepository'

export class PrismaSessionsRepository implements ISessionsRepository {
  async create(data: Session): Promise<Session> {
    const raw = SessionMapper.toDatabase(data)

    const createdSession = await prisma.session.create({
      data: raw,
    })

    return SessionMapper.toDomain(createdSession)
  }

  async refreshToken(sessionId: string, token: string): Promise<Session> {
    const updatedSession = await prisma.session.update({
      where: {
        id: sessionId,
      },
      data: {
        token,
        type: 'REFRESH',
      },
    })

    return SessionMapper.toDomain(updatedSession)
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
