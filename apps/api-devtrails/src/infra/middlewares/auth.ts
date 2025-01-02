import type { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'

import { ForbiddenError } from '@/shared/errors/custom-errors'

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    request.getCurrentUserId = async () => {
      try {
        const { sub, data } = await request.jwtVerify<{
          sub: string
          data: string
        }>()
        console.log('[USER DATA]', data)
        return sub
      } catch {
        throw new ForbiddenError('Invalid token')
      }
    }
  })
})
