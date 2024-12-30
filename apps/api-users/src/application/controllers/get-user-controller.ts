import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

import { GetUserUseCase } from '@/domain/use-cases/get-user-use-case'
import { PrismaUsersRepository } from '@/infra/repositories/prisma/prismaUsersRepository'
import { handleError } from '@/shared/errors/handle-error'

import { getUserParamsSchema } from '../dtos/get-user.dto'

export async function getUserController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = getUserParamsSchema.parse(request.params)

  try {
    const usersRepository = new PrismaUsersRepository()
    const getUserUseCase = new GetUserUseCase(usersRepository)

    const user = await getUserUseCase.execute(id)

    return reply.code(200).send({ ...user })
  } catch (error) {
    handleError(error as FastifyError, request, reply)
  }
}
