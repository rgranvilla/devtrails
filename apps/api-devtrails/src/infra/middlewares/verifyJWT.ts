import { FastifyReply, FastifyRequest } from 'fastify'

import { ForbiddenError } from '@/shared/errors/custom-errors'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (error) {
    return reply.status(401).send(new ForbiddenError())
  }
}
