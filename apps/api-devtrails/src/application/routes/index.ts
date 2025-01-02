import type { FastifyInstance } from 'fastify'

import { sessionsRoutes } from './sessions-routes'
import { usersRoutes } from './users-routes'

export async function appRoutes(app: FastifyInstance) {
  app.register(usersRoutes, { prefix: '/api/v1/users' })
  app.register(sessionsRoutes, { prefix: '/api/v1/sessions' })
}
