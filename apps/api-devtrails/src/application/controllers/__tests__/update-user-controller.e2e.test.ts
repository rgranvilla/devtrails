import { randomUUID } from 'crypto'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'
import type { User } from '@/domain/entities/user'
import { UserMapper } from '@/infra/mappers/userMapper'

let existentUser: User

describe('Update User Controller', () => {
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

  it('should update an user', async () => {
    const updateData = {
      username: 'new_username',
      firstName: 'Jane',
      lastName: 'Doe',
      avatarUrl: 'http://avatar.com/janedoe',
    }

    const updatedUser = await request(app.server)
      .put(`/api/v1/users/${existentUser.id}`)
      .send(updateData)
    expect(updatedUser.body).toMatchObject({
      username: updateData.username,
      firstName: updateData.firstName,
      lastName: updateData.lastName,
      email: existentUser.email,
      avatarUrl: updateData.avatarUrl,
    })
  })

  it('should not update email', async () => {
    const updateData = {
      email: 'new_email@mail.com',
    }

    const updatedUser = await request(app.server)
      .put(`/api/v1/users/${existentUser.id}`)
      .send(updateData)

    expect(updatedUser.status).toBe(400)
  })

  it('should not update password', async () => {
    const updateData = {
      password: 'NewPassword123@',
    }

    const updatedUser = await request(app.server)
      .put(`/api/v1/users/${existentUser.id}`)
      .send(updateData)

    expect(updatedUser.status).toBe(400)
  })

  it('should throw an error if the user does not exist', async () => {
    const updateUser = {
      username: 'new_username',
      firstName: 'Jane',
      lastName: 'Doe',
      avatarUrl: 'http://avatar.com/janedoe',
    }

    const nonExistentId = randomUUID()

    const response = await request(app.server)
      .put(`/api/v1/users/${nonExistentId}`)
      .send(updateUser)

    expect(response.status).toBe(404)
  })
})
