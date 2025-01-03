import { env } from '@devtrails/env'
import type { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'

import { ForbiddenError } from '@/shared/errors/custom-errors'

import AxiosClient from '../libs/axios-client'

export const verifyJwtV2 = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    try {
      await request.jwtVerify<{ exp: number }>({
        onlyCookie: true,
      })

      const { sub: userId, exp: tokenExpireTimestamp } =
        await request.jwtDecode<{
          sub: string
          exp: number
        }>()

      const now = new Date()
      const tokenExpirationDate = new Date(tokenExpireTimestamp * 1000)

      if (now > tokenExpirationDate) {
        console.log('Token expired')
        const refreshToken = request.cookies.refreshToken

        if (!refreshToken) {
          throw new ForbiddenError('Refresh token not found')
        }

        try {
          const client = new AxiosClient(env.API_URL)

          const response = await client
            .getClient()
            .post('/api/v1/sessions/refresh-token', {
              refreshToken,
              userId,
            })

          const { accessToken } = response.data

          request.headers.authorization = `Bearer ${accessToken}`
        } catch (error) {
          if (error) {
            console.error('Failed to refresh token', (error as any)?.response)
          }
          throw new ForbiddenError('Failed to refresh token')
        }
      }
    } catch (error) {
      throw new ForbiddenError('Invalid token')
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
