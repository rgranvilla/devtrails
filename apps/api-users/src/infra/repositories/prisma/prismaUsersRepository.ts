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
