import z from 'zod'

import { passwordSchema } from '@/shared/utils/zod-validators'

export const createUserBodySchema = z.object({
  username: z.string().min(3),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: passwordSchema,
  avatarUrl: z.string().nullable(),
  isSuperAdmin: z.boolean().default(false),
})

export type CreateUserDTO = z.infer<typeof createUserBodySchema>
