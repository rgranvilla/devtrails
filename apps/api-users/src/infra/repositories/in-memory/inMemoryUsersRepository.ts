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
  isSuperAdmin: boolean
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
