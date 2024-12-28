import type { User } from '@/domain/entities/user'

export abstract class IUsersRepository {
  abstract create(user: User): Promise<User>

  abstract findByEmail(email: string): Promise<User | null>
  abstract findByUsername(username: string): Promise<User | null>
}
