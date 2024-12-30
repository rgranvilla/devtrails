import type { User } from '@/domain/entities/user'
import { prisma } from '@/infra/database/prisma'
import { UserMapper } from '@/infra/mappers/userMapper'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'

export class PrismaUsersRepository implements IUsersRepository {
  async create(user: User): Promise<User> {
    const raw = UserMapper.toDatabase(user)

    const createdUser = await prisma.user.create({
      data: raw,
    })

    return UserMapper.toDomain(createdUser)
  }

  async get(userId: string): Promise<User | null> {
    const existentUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!existentUser) return null

    return UserMapper.toDomain(existentUser)
  }

  async getAll(): Promise<User[]> {
    const users = await prisma.user.findMany()

    return users.map(UserMapper.toDomain)
  }

  async update(user: User): Promise<User> {
    const raw = UserMapper.toDatabase(user)

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: raw,
    })

    return UserMapper.toDomain(updatedUser)
  }

  async findById(id: string): Promise<User | null> {
    const existentUser = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!existentUser) return null

    return UserMapper.toDomain(existentUser)
  }

  async findByEmail(email: string): Promise<User | null> {
    const existentUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!existentUser) return null

    return UserMapper.toDomain(existentUser)
  }

  async findByUsername(username: string): Promise<User | null> {
    const existentUser = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (!existentUser) return null

    return UserMapper.toDomain(existentUser)
  }
}
