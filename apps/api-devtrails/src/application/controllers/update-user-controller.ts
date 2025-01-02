import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

import { UpdateUserUseCase } from '@/domain/use-cases/update-user-use-case'
import { PrismaUsersRepository } from '@/infra/repositories/prisma/prismaUsersRepository'
import { handleError } from '@/shared/errors/handle-error'

import { updateUserBodySchema } from '../dtos/update-user.dto'

export async function updateUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateUser = updateUserBodySchema.parse(request.body)

  const userId = await request.getCurrentUserId()

  try {
    const usersRepository = new PrismaUsersRepository()
    const udpateUserUseCase = new UpdateUserUseCase(usersRepository)

    const user = await udpateUserUseCase.execute(updateUser, userId)

    return reply.code(200).send({ ...user.asPlainObject })
  } catch (error) {
    handleError(error as FastifyError, request, reply)
  }
}
