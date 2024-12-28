import { z } from 'zod'

export const passwordSchema = z
  .string()
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'The password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).',
  )
