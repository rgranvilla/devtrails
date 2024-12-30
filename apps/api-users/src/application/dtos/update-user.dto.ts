import z from 'zod'

export const updateUserBodySchema = z
  .object({
    username: z.string().min(3).optional(),
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
    avatarUrl: z.string().nullable().optional(),
  })
  .strict()

export const updateUserParamsSchema = z
  .object({
    id: z.string().uuid(),
  })
  .strict()

export type UpdateUserDTO = z.infer<typeof updateUserBodySchema>
