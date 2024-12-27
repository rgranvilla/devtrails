import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { errorHandler } from '@/core/errors/error-handler'
import { registerMiddlewares } from '@/core/middlewares/registers'

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

registerMiddlewares(app)

app.setErrorHandler(errorHandler)
