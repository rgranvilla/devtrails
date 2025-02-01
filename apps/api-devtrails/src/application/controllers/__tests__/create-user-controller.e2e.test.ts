import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'

describe('Create User Controller', () => {
  beforeAll(async () => {
    await app.ready()
    await request(app.server).post('/api/v1/users').send({
      username: 'same_username',
      firstName: 'John',
      lastName: 'Doe',
      email: 'same_email@mail.com',
      password: 'Password123@',
      avatarUrl: 'http://avatar.com/johndoe',
    })
  })

  afterAll(async () => {
    await app.close()
  })

  it('should create a new user', async () => {
    const response = await request(app.server).post('/api/v1/users').send({
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john_doe@mail.com',
      password: 'Password123@',
      avatarUrl: 'http://avatar.com/johndoe',
    })

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      id: expect.any(String),
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john_doe@mail.com',
      avatarUrl: 'http://avatar.com/johndoe',
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      deletedAt: null,
    })
  })

  it('should not create a new user with the same email', async () => {
    const response = await request(app.server).post('/api/v1/users').send({
      username: 'other_name',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john_doe@mail.com',
      password: 'Password123@',
      avatarUrl: 'http://avatar.com/johndoe',
    })

    expect(response.status).toBe(409)
    expect(response.body).toMatchObject({
      message: 'Email already in use',
    })
  })

  it('should not create a new user with the same username', async () => {
    const response = await request(app.server).post('/api/v1/users').send({
      username: 'same_username',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john_doe2@mail.com',
      password: 'Password123@',
      avatarUrl: 'http://avatar.com/johndoe',
    })

    expect(response.status).toBe(409)
    expect(response.body).toMatchObject({
      message: 'Username already in use',
    })
  })
})
