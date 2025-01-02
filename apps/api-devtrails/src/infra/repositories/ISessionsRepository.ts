import type { Session } from '@/domain/entities/session'

export interface ICreateUserTokenPayload {
  userId: string
  token: string
  refreshToken: string
  expiresDate: Date
}

export abstract class ISessionsRepository {
  abstract create(data: Session): Promise<Session>
  abstract refreshToken(sessionId: string, token: string): Promise<Session>

  abstract findByRefreshToken(refreshToken: string): Promise<Session | null>
}
