import { Session as SessionDB } from '@prisma/client'

import { Session as SessionEntity } from '@/domain/entities/session'

export class SessionMapper {
  static toDatabase(user: SessionEntity): SessionDB {
    return {
      ...user.asPlainObject,
    }
  }

  static toDomain(raw: SessionDB): SessionEntity {
    const { id, ...rest } = raw

    const session = new SessionEntity(
      {
        ...rest,
      },
      id,
    )

    return session
  }
}
