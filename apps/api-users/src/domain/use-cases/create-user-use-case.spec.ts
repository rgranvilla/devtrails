import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryUsersRepository } from '@/infra/repositories/in-memory/inMemoryUsersRepository'

import { CreateUserUseCase } from './create-user-use-case'

let usersRepository: InMemoryUsersRepository
let sut: CreateUserUseCase

describe('Create User Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new CreateUserUseCase(usersRepository)
  })

  it('should be able to create a new user', async () => {
    const newUser = {
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: 'password123#',
      avatarUrl: 'http://avatar.com/johndoe',
    }

    const response = await sut.execute(newUser)

    expect(response).toMatchObject({
      id: expect.any(String),
      username: newUser.username,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      deletedAt: null,
    })
  })

  it('should not be able to create a user with an email already in use', async () => {
    const newUser = {
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: 'password123#',
      avatarUrl: 'http://avatar.com/johndoe',
    }

    await sut.execute(newUser)

    await expect(sut.execute(newUser)).rejects.toThrowError(
      'Email already in use',
    )
  })

  it('should not be able to create a user with a username already in use', async () => {
    const newUser = {
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: 'password123#',
      avatarUrl: 'http://avatar.com/johndoe',
    }

    await sut.execute({ ...newUser, email: 'johndoe2@mail.com' })

    await expect(sut.execute(newUser)).rejects.toThrowError(
      'Username already in use',
    )
  })
})
