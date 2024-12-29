import { type CreateUserDTO } from '@/application/dtos/create-user.dto'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'
import { ConflictError } from '@/shared/errors/custom-errors'

import { User } from '../entities/user'

export class CreateUserUseCase {
  private usersRepository: IUsersRepository

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(data: CreateUserDTO): Promise<User> {
    const { email, username } = data

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new ConflictError('Email already in use')
    }

    const userWithSameUsername =
      await this.usersRepository.findByUsername(username)

    if (userWithSameUsername) {
      throw new ConflictError('Username already in use')
    }

    const newUser = new User(data)

    const user = await this.usersRepository.create(newUser)

    return user
  }
}
