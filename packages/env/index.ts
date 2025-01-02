import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SERVER_PORT: z.coerce.number().default(5000),
    DATABASE_URL: z.string().url(),

    SALT_ROUNDS: z.coerce.number().default(8),
    CRYPTO_SECRET: z.string(),

    JWT_SECRET: z.string(),
    JWT_EXPIRES_IN_SECONDS: z.coerce.number().default(3600), // 1 hour
    JWT_REFRESH_EXPIRES_IN_SECONDS: z.coerce.number().default(604800), // 7 days

    GITHUB_OAUTH_CLIENT_ID: z.string(),
    GITHUB_OAUTH_CLIENT_SECRET: z.string(),
    GITHUB_OAUTH_REDIRECT_URI: z.string().url(),
    GOOGLE_OAUTH_CLIENT_ID: z.string(),
    GOOGLE_OAUTH_CLIENT_SECRET: z.string(),
    GOOGLE_OAUTH_REDIRECT_URI: z.string().url(),
    STORAGE_DISK: z.enum(['local']),
  },
  client: {},
  shared: {
    NEXT_PUBLIC_API_URL: z.string(),
  },
  runtimeEnv: {
    SERVER_PORT: process.env.SERVER_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    CRYPTO_SECRET: process.env.CRYPTO_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN_SECONDS: process.env.JWT_EXPIRES_IN_SECONDS,
    JWT_REFRESH_EXPIRES_IN_SECONDS: process.env.JWT_REFRESH_EXPIRES_IN_SECONDS,
    GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
    GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    GITHUB_OAUTH_REDIRECT_URI: process.env.GITHUB_OAUTH_REDIRECT_URI,
    GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    GOOGLE_OAUTH_REDIRECT_URI: process.env.GOOGLE_OAUTH_REDIRECT_URI,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    STORAGE_DISK: process.env.STORAGE_DISK,
  },
  emptyStringAsUndefined: true,
})
