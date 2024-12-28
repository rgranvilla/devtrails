import '@fastify/jwt';

import { Role } from '@devtrails/auth';

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      sub: string;
      role: Role;
    };
  }
}