import { randomUUID } from 'crypto'

import type { Replace } from '@/shared/utils/replace'

interface IUserProps {
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
  avatarUrl?: string | null
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

export class User {
  private _id: string
  private _props: IUserProps

  constructor(
    props: Replace<
      IUserProps,
      {
        createdAt?: Date
        updatedAt?: Date
        deletedAt?: Date | null
      }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID()
    this._props = {
      ...props,
      avatarUrl:
        props.avatarUrl && props.avatarUrl?.length > 0 ? props.avatarUrl : null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
      deletedAt: props.deletedAt ?? null,
    }
  }

  public get props(): IUserProps {
    return this._props
  }

  public get id(): string {
    return this._id
  }

  public set username(value: string) {
    this._props.username = value
  }

  public get username(): string {
    return this._props?.username
  }

  public set firstName(value: string) {
    this._props.firstName = value
  }

  public get firstName(): string {
    return this._props?.firstName
  }

  public set lastName(value: string) {
    this._props.lastName = value
  }

  public get lastName(): string {
    return this._props?.lastName
  }

  public set email(value: string) {
    this._props.email = value
  }

  public get email(): string {
    return this._props?.email
  }

  public set password(value: string) {
    this._props.password = value
  }

  public get password(): string {
    return this._props?.password
  }

  public set avatarUrl(value: string) {
    this._props.avatarUrl = value
  }

  public get avatarUrl(): string | null | undefined {
    return this._props?.avatarUrl
  }

  public set createdAt(value: Date) {
    this._props.createdAt = value
  }

  public get createdAt(): Date {
    return this._props?.createdAt
  }

  public set updatedAt(value: Date) {
    this._props.updatedAt = value
  }

  public get updatedAt(): Date {
    return this._props?.updatedAt
  }

  public set deletedAt(value: Date) {
    this._props.deletedAt = value
  }

  public get deletedAt(): Date | null | undefined {
    return this._props?.deletedAt
  }

  public get asPlainObject() {
    return {
      id: this._id,
      ...this._props,
    }
  }
}
