import type { Session } from '@/domain/entities/session'

export interface ICreateUserTokenPayload {
  userId: string
  token: string
  refreshToken: string
  expiresDate: Date
}

export abstract class ISessionsRepository {
  abstract create(data: Session): Promise<Session>

  abstract refreshToken(
    refreshToken: string,
    newToken: string,
  ): Promise<Session>

  abstract revokeToken(refreshToken: string): Promise<void>

  abstract findByRefreshToken(refreshToken: string): Promise<Session | null>
}
