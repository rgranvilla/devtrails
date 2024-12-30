import type { GetUserDTO } from '@/application/dtos/get-user.dto'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'
import { NotFoundError } from '@/shared/errors/custom-errors'

export class GetUserUseCase {
  private usersRepository: IUsersRepository

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(id: string): Promise<GetUserDTO> {
    const existentUser = await this.usersRepository.get(id)

    if (!existentUser) {
      throw new NotFoundError('User not found')
    }

    const foundedUser: GetUserDTO = {
      id: existentUser.id,
      username: existentUser.username,
      firstName: existentUser.firstName,
      lastName: existentUser.lastName,
      email: existentUser.email,
      avatarUrl: existentUser.avatarUrl ?? null,
      createdAt: existentUser.createdAt,
      updatedAt: existentUser.updatedAt,
      deletedAt: existentUser.deletedAt ?? null,
    }

    return foundedUser
  }
}
