import { randomUUID } from 'crypto'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'
import type { User } from '@/domain/entities/user'
import { UserMapper } from '@/infra/mappers/userMapper'

let existentUser: User

describe('Get User Controller', () => {
  beforeAll(async () => {
    await app.ready()
    const createdUser = await request(app.server).post('/api/v1/users').send({
      username: 'existent_username',
      firstName: 'John',
      lastName: 'Doe',
      email: 'existent_email@mail.com',
      password: 'Password123@',
      avatarUrl: 'http://avatar.com/johndoe',
    })

    existentUser = UserMapper.toDomain(createdUser.body)
  })

  afterAll(async () => {
    await app.close()
  })

  it('should get an user', async () => {
    const foundedUser = await request(app.server).get(
      `/api/v1/users/${existentUser.id}`,
    )
    expect(foundedUser.body).toMatchObject({
      username: existentUser.username,
      firstName: existentUser.firstName,
      lastName: existentUser.lastName,
      email: existentUser.email,
      avatarUrl: existentUser.avatarUrl,
    })
  })

  it('should return 404 if user does not exist', async () => {
    const response = await request(app.server).get(
      `/api/v1/users/${randomUUID()}`,
    )
    expect(response.status).toBe(404)
  })

  it('should return 400 if id is invalid', async () => {
    const response = await request(app.server).get('/api/v1/users/invalid_id')
    expect(response.status).toBe(400)
  })
})
