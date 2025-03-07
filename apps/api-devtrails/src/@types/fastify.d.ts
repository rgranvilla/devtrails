import 'fastify'

declare module 'fastify' {
  interface FastifyRequest {
    getCurrentUserId(): Promise<string>
    getCurrentSessionId(): Promise<string>
  }
}
