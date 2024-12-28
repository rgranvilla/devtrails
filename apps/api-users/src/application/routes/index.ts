import type { FastifyInstance } from 'fastify'

import { usersRoutes } from './users-routes'

export async function appRoutes(app: FastifyInstance) {
  app.register(usersRoutes, { prefix: '/api/v1/users' })
}
