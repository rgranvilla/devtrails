import { env } from '@devtrails/env'
import dayjs from 'dayjs'
import type { FastifyRequest } from 'fastify'
import type { FastifyReply } from 'fastify/types/reply'

import { ForbiddenError } from '@/shared/errors/custom-errors'

import AxiosClient from '../libs/axios-client'

export const jwtMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    console.info('[INITIATE VERIFY JWT MIDDLEWARE]')
    const authHeader = request.headers.authorization?.replace('Bearer ', '')

    if (!authHeader) {
      throw new ForbiddenError('Missing token')
    }

    const { exp, sub: userId } = request.server.jwt.verify<{
      exp: string
      sub: string
    }>(authHeader, { ignoreExpiration: true })

    const expiresDateIsAfter = dayjs().isAfter(dayjs(exp))
    if (expiresDateIsAfter) {
      const refreshToken = request.cookies.refreshToken
      if (refreshToken) {
        try {
          console.info('[TRY REFRESHING TOKEN]')
          const client = new AxiosClient(env.API_URL)
          const response = await client
            .getClient()
            .post('/api/v1/sessions/refresh-token', {
              refreshToken,
              userId,
            })
          reply.setCookie('accessToken', response.data.token, {
            expires: dayjs().add(30, 'second').toDate(),
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
          })
        } catch (error) {
          console.error(
            'Failed to refresh token',
            (error as any)?.response.data,
          )
          throw new ForbiddenError('Failed to refresh token')
        }
      }
    }
  } catch (error) {
    console.error('[ERROR VERIFYING TOKEN]', error)
    throw new ForbiddenError('Invalid token')
  }
}
