import type { User as UserType } from '@prisma/client'
import { describe, expect, it } from 'vitest'

import { User } from '@/domain/entities/user'

import { UserMapper } from './userMapper'

describe('User Mapper', () => {
  const user = new User({
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@mail.com',
    password: '123456',
  })

  const rawUser: UserType = {
    ...user.asPlainObject,
    avatarUrl: user.avatarUrl ?? null,
    deletedAt: user.deletedAt ?? null,
  }

  it('should convert user to database format', () => {
    const dbUser = UserMapper.toDatabase(user)

    expect(dbUser).toEqual(rawUser)
  })

  it('should convert raw data to domain entity', () => {
    const domainUser = UserMapper.toDomain(rawUser)

    expect(domainUser).toBeInstanceOf(User)
    expect(domainUser).toMatchObject(user)
  })
})
