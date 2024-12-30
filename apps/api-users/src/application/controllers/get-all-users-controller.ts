import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

import { GetAllUsersUseCase } from '@/domain/use-cases/get-all-users-use-case'
import { PrismaUsersRepository } from '@/infra/repositories/prisma/prismaUsersRepository'
import { handleError } from '@/shared/errors/handle-error'

export async function getAllUsersController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const usersRepository = new PrismaUsersRepository()
    const getUserUseCase = new GetAllUsersUseCase(usersRepository)

    const users = await getUserUseCase.execute()

    return reply.code(200).send({ users })
  } catch (error) {
    handleError(error as FastifyError, request, reply)
  }
}
