import type { User } from '@/domain/entities/user'

export abstract class IUsersRepository {
  abstract create(user: User): Promise<User>
  abstract get(userId: string): Promise<User | null>
  abstract getAll(): Promise<User[]>
  abstract update(user: User): Promise<User>

  abstract findById(id: string): Promise<User | null>
  abstract findByEmail(email: string): Promise<User | null>
  abstract findByUsername(username: string): Promise<User | null>
}
