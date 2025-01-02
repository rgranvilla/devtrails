import z from 'zod'

export const getUserSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(3),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  avatarUrl: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
})

export type GetUserDTO = z.infer<typeof getUserSchema>

export const getUserParamsSchema = z
  .object({
    id: z.string().uuid(),
  })
  .strict()
