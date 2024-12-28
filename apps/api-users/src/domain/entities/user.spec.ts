import { describe, expect, it } from 'vitest'

import { User } from './user'

describe('User Entetie', () => {
  it('should create a new User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    expect(user).toBeDefined()
    expect(user.id).toBeDefined()
    expect(user.username).toBe('johndoe')
    expect(user.firstName).toBe('John')
    expect(user.lastName).toBe('Doe')
    expect(user.email).toBe('johndoe@mail.com')
    expect(user.password).toBe('123456')
    expect(user.avatarUrl).toBeDefined()
    expect(user.isSuperAdmin).toBe(false)
    expect(user.createdAt).toBeInstanceOf(Date)
    expect(user.updatedAt).toBeInstanceOf(Date)
    expect(user.deletedAt).toBeDefined()
  })

  it('should update username from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        username: 'jane_doe',
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.username).toBe('jane_doe')
  })

  it('should update firstName from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        firstName: 'Jane',
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.firstName).toBe('Jane')
  })

  it('should update lastName from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        lastName: 'Black',
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.lastName).toBe('Black')
  })

  it('should update email from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        email: 'janedoe@mail.com',
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.email).toBe('janedoe@mail.com')
  })

  it('should update password from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        password: '654321',
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.password).toBe('654321')
  })

  it('should update avatarUrl from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        avatarUrl: 'johndoe.png',
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.avatarUrl).toBe('johndoe.png')
  })

  it('should update isSuperAdmin from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        isSuperAdmin: true,
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.isSuperAdmin).toBeTruthy()
  })

  it('should update createdAt from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const newDate = new Date('2025-01-01')
    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        createdAt: newDate,
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.createdAt).toBe(newDate)
  })

  it('should update updatedAt from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const newDate = new Date('2025-01-01')
    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        updatedAt: newDate,
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.updatedAt).toBe(newDate)
  })

  it('should update deletedAt from User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const newDate = new Date('2025-01-01')
    const { id, props } = user

    const updatedUser = new User(
      {
        ...props,
        deletedAt: newDate,
      },
      id,
    )

    expect(updatedUser.id).toBe(id)
    expect(updatedUser.deletedAt).toBe(newDate)
  })

  it('should set values on User instance', () => {
    const user = new User({
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    })

    const newDate = new Date('2025-01-01')

    user.username = 'jane_eve'
    user.firstName = 'Jane'
    user.lastName = 'Eve'
    user.email = 'jane_doe@mail.com'
    user.password = '654321'
    user.avatarUrl = 'jane_eve.png'
    user.isSuperAdmin = true
    user.createdAt = newDate
    user.updatedAt = newDate
    user.deletedAt = newDate

    expect(user).toMatchObject({
      username: 'jane_eve',
    })
  })
})
