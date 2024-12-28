import type { CreateUserDTO } from '@/application/dtos/create-user.dto'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'
import { AlreadyInUseError } from '@/shared/errors/custom-errors/already-in-use-error'

import { User } from '../entities/user'

export class CreateUserUseCase {
  private usersRepository: IUsersRepository

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(data: CreateUserDTO): Promise<User> {
    const userWithSameEmail = await this.usersRepository.findByEmail(data.email)

    if (userWithSameEmail) {
      throw new AlreadyInUseError({
        error: 'Email Not Available',
        message: 'This email already in use',
      })
    }

    const userWithSameUsername = await this.usersRepository.findByUsername(
      data.username,
    )

    if (userWithSameUsername) {
      throw new AlreadyInUseError({
        error: 'Username Not Available',
        message: 'This username already in use',
      })
    }

    const newUser = new User(data)

    const user = await this.usersRepository.create(newUser)

    return user
  }
}
