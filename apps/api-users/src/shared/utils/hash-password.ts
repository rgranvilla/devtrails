import { env } from '@devtrails/env'
import { hash } from 'bcrypt'

export async function hashPassword(password: string) {
  const saltRounds = env.SALT_ROUNDS

  const hashedPassword = await hash(password, saltRounds)

  return hashedPassword
}
