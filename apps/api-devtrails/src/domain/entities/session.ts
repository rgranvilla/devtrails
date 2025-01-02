import { env } from '@devtrails/env'
import type { Provider, TokenType } from '@prisma/client'
import { randomUUID } from 'crypto'

import type { Replace } from '@/shared/utils/replace'

interface ISessionProps {
  userId: string
  token: string
  refreshToken: string
  expiresDate: Date
  type: TokenType
  provider: Provider
  createdAt: Date
}

export class Session {
  private _id: string
  private _props: ISessionProps

  constructor(
    props: Replace<
      ISessionProps,
      {
        expiresDate?: Date
        createdAt?: Date
      }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID()
    this._props = {
      ...props,
      expiresDate:
        props.expiresDate ??
        new Date(Date.now() + 1000 * env.JWT_EXPIRES_IN_SECONDS), // 7 days
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id(): string {
    return this._id
  }

  public get userId(): string {
    return this._props.userId
  }

  public set token(token: string) {
    this._props.token = token
  }

  public get token(): string {
    return this._props.token
  }

  public set refreshToken(refreshToken: string) {
    this._props.refreshToken = refreshToken
  }

  public get refreshToken(): string {
    return this._props.refreshToken
  }

  public set expiresDate(expiresDate: Date) {
    this._props.expiresDate = expiresDate
  }

  public get expiresDate(): Date {
    return this._props.expiresDate
  }

  public set type(type: TokenType) {
    this._props.type = type
  }

  public get type(): TokenType {
    return this._props.type
  }

  public set provider(provider: Provider) {
    this._props.provider = provider
  }

  public get provider(): Provider {
    return this._props.provider
  }

  public get createdAt(): Date {
    return this._props.createdAt
  }

  public get asPlainObject() {
    return {
      id: this._id,
      ...this._props,
    }
  }
}
