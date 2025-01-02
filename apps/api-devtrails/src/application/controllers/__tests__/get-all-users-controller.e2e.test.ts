import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'
import type { User } from '@/domain/entities/user'
import { UserMapper } from '@/infra/mappers/userMapper'

let createdFirst: User
let createdSecond: User

describe('Get All Users Controller', () => {
  beforeAll(async () => {
    await app.ready()
    const fristUser = await request(app.server).post('/api/v1/users').send({
      username: 'first_user',
      firstName: 'First',
      lastName: 'User',
      email: 'first@mail.com',
      password: 'Password123@',
      avatarUrl: '',
    })
    const secondUser = await request(app.server).post('/api/v1/users').send({
      username: 'second_user',
      firstName: 'Second',
      lastName: 'User',
      email: 'second@mail.com',
      password: 'Password123@',
      avatarUrl: '',
    })

    createdFirst = UserMapper.toDomain(fristUser.body)
    createdSecond = UserMapper.toDomain(secondUser.body)
  })

  afterAll(async () => {
    await app.close()
  })

  it('should get all users', async () => {
    const foundedUser = await request(app.server).get(`/api/v1/users/`)
    expect(foundedUser.body.users).toHaveLength(2)
    expect(foundedUser.body.users[0]).toMatchObject({
      id: createdFirst.id,
      username: createdFirst.username,
      firstName: createdFirst.firstName,
      lastName: createdFirst.lastName,
      email: createdFirst.email,
      avatarUrl: createdFirst.avatarUrl,
    })
    expect(foundedUser.body.users[1]).toMatchObject({
      id: createdSecond.id,
      username: createdSecond.username,
      firstName: createdSecond.firstName,
      lastName: createdSecond.lastName,
      email: createdSecond.email,
      avatarUrl: createdSecond.avatarUrl,
    })
  })
})
