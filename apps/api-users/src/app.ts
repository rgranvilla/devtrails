import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { registerMiddlewares } from '@/infra/middlewares/registers'

import { handleError } from './shared/errors/handle-error'

export const app = fastify().withTypeProvider<ZodTypeProvider>()
// {
//   logger: true,
// },

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

registerMiddlewares(app)

app.setErrorHandler(handleError)
