import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { registerMiddlewares } from '@/interfaces/middlewares/registers'
import { errorHandler } from '@/shared/errors/error-handler'

export const app = fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

registerMiddlewares(app)

app.setErrorHandler(errorHandler)
