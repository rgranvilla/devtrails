import type { UpdateUserDTO } from '@/application/dtos/update-user.dto'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'
import { ConflictError, NotFoundError } from '@/shared/errors/custom-errors'

import { User } from '../entities/user'

export class UpdateUserUseCase {
  private usersRepository: IUsersRepository

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(data: UpdateUserDTO, id: string): Promise<User> {
    const { username } = data

    const existentUser = await this.usersRepository.findById(id)

    if (!existentUser) {
      throw new NotFoundError('User not found')
    }

    if (username) {
      const searchUserByUsername =
        await this.usersRepository.findByUsername(username)

      const userWithSameUsername =
        searchUserByUsername && searchUserByUsername?.id !== id

      if (userWithSameUsername) {
        throw new ConflictError('Username already in use')
      }
    }

    const updateUserData = {
      ...data,
      createdAt: existentUser.createdAt,
      updatedAt: new Date(),
      deletedAt: existentUser.deletedAt,
      password: existentUser.password,
      email: existentUser.email,
      username: username ?? existentUser.username,
      firstName: data.firstName ?? existentUser.firstName,
      lastName: data.lastName ?? existentUser.lastName,
      avatarUrl: data.avatarUrl ?? existentUser.avatarUrl,
    }

    const updatedUser = new User(updateUserData, existentUser.id)

    const user = await this.usersRepository.update(updatedUser)

    return user
  }
}
