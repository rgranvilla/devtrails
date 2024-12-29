import { z } from 'zod'

export const ValidationErrorParamsSchema = z.object({
  issue: z.object({
    validation: z.string(), // "regex"
    code: z.string(), // "invalid_string"
    message: z.string(), // Mensagem de validação
    path: z.array(z.string()), // ["password"]
  }),
})

export const ValidationErrorDetailSchema = z.object({
  keyword: z.string(), // "invalid_string"
  instancePath: z.string(), // "/password"
  schemaPath: z.string(), // "#/password/invalid_string"
  params: ValidationErrorParamsSchema, // Utilizando o schema de ValidationErrorParams
  message: z.string(), // Mensagem de erro
})

export const ValidationErrorSchema = z.object({
  error: z.string(), // "Validation Error"
  message: z.string(),
  details: z.array(ValidationErrorDetailSchema), // Um array de ValidationErrorDetail
})
