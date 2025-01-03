import { env } from '@devtrails/env'
import type { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'

import { ForbiddenError } from '@/shared/errors/custom-errors'

import AxiosClient from '../libs/axios-client'

export const verifyJWT = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    try {
      await request.jwtVerify()
    } catch {
      try {
        console.log('[VERIFING REFRESH TOKEN]')
        const { sub } = await request.jwtVerify<{ sub: string }>({
          onlyCookie: true,
        })

        console.log('[REFRESHING TOKEN]')
        const client = new AxiosClient(env.API_URL)

        await client.getClient().post('/api/v1/sessions/refresh-token', {
          refreshToken: request.cookies.refreshToken,
          userId: sub,
        })
      } catch (error) {
        console.error('[INVALID TOKEN]', error)
        throw new ForbiddenError('Invalid token')
      }
    }

    request.getCurrentUserId = async () => {
      try {
        const { sub } = await request.jwtVerify<{ sub: string }>()

        return sub
      } catch {
        throw new ForbiddenError('Invalid token')
      }
    }
  })
})
