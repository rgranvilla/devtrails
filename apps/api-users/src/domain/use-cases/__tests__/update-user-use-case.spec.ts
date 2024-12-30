import { beforeEach, describe, expect, it } from 'vitest'

import { User } from '@/domain/entities/user'
import { InMemoryUsersRepository } from '@/infra/repositories/in-memory/inMemoryUsersRepository'
import { hashPassword } from '@/shared/utils/hash-password'

import { UpdateUserUseCase } from '../update-user-use-case'

let usersRepository: InMemoryUsersRepository
let existentUser: User
let sut: UpdateUserUseCase

describe('Update User Use Case', () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository()
    sut = new UpdateUserUseCase(usersRepository)
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

  it('should be able to update an user', async () => {
    const updateUser = {
      username: 'new_username',
      firstName: 'Jane',
      lastName: 'Doe',
      email: existentUser.email,
      avatarUrl: 'http://avatar.com/janedoe',
    }

    const response = await sut.execute(updateUser, existentUser.id)

    expect(response).toMatchObject({
      id: existentUser.id,
      username: updateUser.username,
      firstName: updateUser.firstName,
      lastName: updateUser.lastName,
      email: existentUser.email,
      password: existentUser.password,
      createdAt: existentUser.createdAt,
      updatedAt: expect.any(Date),
      deletedAt: existentUser.deletedAt,
    })
  })

  it('should throw an error if the user does not exist', async () => {
    await expect(
      sut.execute({} as any, 'non_existent_id'),
    ).rejects.toThrowError('User not found')
  })

  it('should throw an error if the username is already in use', async () => {
    const userWithSameUsername = new User({
      username: 'janedoe',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@mail.com',
      password: 'existentUser.Password123@',
      avatarUrl: 'http://avatar.com/janedoe',
    })

    await usersRepository.create(userWithSameUsername)

    await expect(
      sut.execute({ username: 'janedoe' }, existentUser.id),
    ).rejects.toThrowError('Username already in use')
  })

  it('should be able to remove the avatar url from existent user', async () => {
    const updateUser = {
      avatarUrl: '',
    }

    const response = await sut.execute(updateUser, existentUser.id)

    expect(response).toMatchObject({
      id: existentUser.id,
      username: existentUser.username,
      firstName: existentUser.firstName,
      lastName: existentUser.lastName,
      email: existentUser.email,
      password: existentUser.password,
      createdAt: existentUser.createdAt,
      updatedAt: expect.any(Date),
      deletedAt: existentUser.deletedAt,
      avatarUrl: null,
    })
  })
})
