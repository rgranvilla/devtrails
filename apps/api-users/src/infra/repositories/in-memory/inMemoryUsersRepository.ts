import type { User } from '@/domain/entities/user'
import { UserMapper } from '@/infra/mappers/userMapper'

import type { IUsersRepository } from '../IUsersRepository'

type InMemoryUserDB = {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
  avatarUrl: string | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export class InMemoryUsersRepository implements IUsersRepository {
  private items: InMemoryUserDB[] = []

  async create(user: User): Promise<User> {
    this.items.push(UserMapper.toDatabase(user))

    return user
  }

  async get(userId: string): Promise<User | null> {
    const existentUser = this.items.find((user) => user.id === userId)

    if (!existentUser) return null

    return UserMapper.toDomain(existentUser)
  }

  async getAll(): Promise<User[]> {
    return this.items.map(UserMapper.toDomain)
  }

  async update(user: User): Promise<User> {
    const existentUserIndex = this.items.findIndex(
      (existentUser) => existentUser.id === user.id,
    )

    this.items[existentUserIndex] = UserMapper.toDatabase(user)

    return UserMapper.toDomain(this.items[existentUserIndex])
  }

  async findById(id: string): Promise<User | null> {
    const existentUser = this.items.find((user) => user.id === id)

    if (!existentUser) return null

    return UserMapper.toDomain(existentUser)
  }

  async findByEmail(email: string): Promise<User | null> {
    const existentUser = this.items.find((user) => user.email === email)

    if (!existentUser) return null

    return UserMapper.toDomain(existentUser)
  }

  async findByUsername(username: string): Promise<User | null> {
    const existentUser = this.items.find((user) => user.username === username)

    if (!existentUser) return null

    return UserMapper.toDomain(existentUser)
  }
}
