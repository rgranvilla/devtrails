import type { GetUserDTO } from '@/application/dtos/get-user.dto'
import type { IUsersRepository } from '@/infra/repositories/IUsersRepository'

export class GetAllUsersUseCase {
  private usersRepository: IUsersRepository

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(): Promise<GetUserDTO[]> {
    const existentUsers = await this.usersRepository.getAll()

    const foundedUsers: GetUserDTO[] = existentUsers.map((existentUser) => ({
      id: existentUser.id,
      username: existentUser.username,
      firstName: existentUser.firstName,
      lastName: existentUser.lastName,
      email: existentUser.email,
      avatarUrl: existentUser.avatarUrl ?? null,
      createdAt: existentUser.createdAt,
      updatedAt: existentUser.updatedAt,
      deletedAt: existentUser.deletedAt ?? null,
    }))

    return foundedUsers
  }
}
