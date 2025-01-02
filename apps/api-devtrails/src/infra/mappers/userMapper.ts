import { User as UserDB } from '@prisma/client'

import { User as UserEntety } from '@/domain/entities/user'

export class UserMapper {
  static toDatabase(user: UserEntety): UserDB {
    return {
      ...user.asPlainObject,
      avatarUrl: user.avatarUrl ?? null,
      deletedAt: user.deletedAt ?? null,
    }
  }

  static toDomain(raw: UserDB): UserEntety {
    const { id, ...rest } = raw

    const user = new UserEntety(
      {
        ...rest,
      },
      id,
    )

    return user
  }
}
