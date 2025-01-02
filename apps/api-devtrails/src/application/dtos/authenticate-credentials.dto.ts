import z from 'zod'

export const authenticateCredentialsBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type AuthenticationCredentialsDTO = z.infer<
  typeof authenticateCredentialsBodySchema
>
