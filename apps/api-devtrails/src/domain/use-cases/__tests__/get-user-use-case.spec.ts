import { beforeEach, describe, expect, it } from 'vitest'

import { User } from '@/domain/entities/user'
import { InMemoryUsersRepository } from '@/infra/repositories/in-memory/inMemoryUsersRepository'
import { hashPassword } from '@/shared/utils/hash-password'

import { GetUserUseCase } from '../get-user-use-case'

let usersRepository: InMemoryUsersRepository
let existentUser: User
let sut: GetUserUseCase

describe('Get User Use Case', () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserUseCase(usersRepository)
    existentUser = new User({
      username: 'existent_username',
      firstName: 'John',
      lastName: 'Doe',
      email: 'existent_email@mail.com',
      password: await hashPassword('Password123@'),
      avatarUrl: 'http://avatar.com/johndoe',
    })
    await usersRepository.create(existentUser)
  })

  it('should be able to get an user', async () => {
    const response = await sut.execute(existentUser.id)

    expect(response).toMatchObject({
      id: existentUser.id,
      username: existentUser.username,
      firstName: existentUser.firstName,
      lastName: existentUser.lastName,
      email: existentUser.email,
      createdAt: existentUser.createdAt,
      updatedAt: expect.any(Date),
      deletedAt: existentUser.deletedAt,
    })
  })
})
