import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

import { createUserBodySchema } from '@/application/dtos/create-user.dto'
import { CreateUserUseCase } from '@/domain/use-cases/create-user-use-case'
import { PrismaUsersRepository } from '@/infra/repositories/prisma/prismaUsersRepository'
import { handleError } from '@/shared/errors/handle-error'
import { hashPassword } from '@/shared/utils/hash-password'
import { passwordSchema } from '@/shared/utils/zod-validators'

export async function createUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const newUser = createUserBodySchema.parse(request.body)

  const password = passwordSchema.parse(newUser.password)

  try {
    const usersRepository = new PrismaUsersRepository()
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    const user = await createUserUseCase.execute({
      ...newUser,
      password: await hashPassword(password),
    })

    return reply.code(201).send({
      ...user.asPlainObject,
    })
  } catch (error) {
    handleError(error as FastifyError, request, reply)
  }
}
