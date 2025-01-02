import z from 'zod'

export const refreshTokensBodySchema = z.object({
  refreshToken: z.string().jwt(),
  userId: z.string().uuid(),
})

export type RefreshTokensDTO = z.infer<typeof refreshTokensBodySchema>
