import { beforeEach, describe, expect, it } from 'vitest'

import { User } from '@/domain/entities/user'
import { InMemoryUsersRepository } from '@/infra/repositories/in-memory/inMemoryUsersRepository'
import { hashPassword } from '@/shared/utils/hash-password'

import { GetAllUsersUseCase } from '../get-all-users-use-case'

let usersRepository: InMemoryUsersRepository
let firstUser: User
let secondUser: User
let sut: GetAllUsersUseCase

describe('Get User Use Case', () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetAllUsersUseCase(usersRepository)
    firstUser = new User({
      username: 'first_user',
      firstName: 'First',
      lastName: 'User',
      email: 'first@mail.com',
      password: await hashPassword('Password123@'),
      avatarUrl: '',
    })
    secondUser = new User({
      username: 'second_user',
      firstName: 'Second',
      lastName: 'User',
      email: 'second@mail.com',
      password: await hashPassword('Password123@'),
      avatarUrl: '',
    })
    await usersRepository.create(firstUser)
    await usersRepository.create(secondUser)
  })

  it('should be able to get all users', async () => {
    const response = await sut.execute()

    expect(response).toHaveLength(2)
    expect(response[0]).toMatchObject({
      id: firstUser.id,
      username: firstUser.username,
      firstName: firstUser.firstName,
      lastName: firstUser.lastName,
      email: firstUser.email,
      createdAt: firstUser.createdAt,
      updatedAt: expect.any(Date),
      deletedAt: firstUser.deletedAt,
    })
    expect(response[1]).toMatchObject({
      id: secondUser.id,
      username: secondUser.username,
      firstName: secondUser.firstName,
      lastName: secondUser.lastName,
      email: secondUser.email,
      createdAt: secondUser.createdAt,
      updatedAt: expect.any(Date),
      deletedAt: secondUser.deletedAt,
    })
  })
})
