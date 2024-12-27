import { env } from '@devtrails/env'

import { app } from './app'

app
  .listen({
    port: env.SERVER_PORT_ORGANIZATIONS,
  })
  .then(() => {
    console.log(
      `Server is running on http://localhost:${env.SERVER_PORT_ORGANIZATIONS}`,
    )
    console.log(
      `Swagger is running on http://localhost:${env.SERVER_PORT_ORGANIZATIONS}/docs`,
    )
  })
  .catch((error: unknown) => {
    console.error('Error starting server:', error)
    process.exit(1)
  })
