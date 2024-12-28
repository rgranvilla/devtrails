import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SERVER_PORT_CORE: z.coerce.number().default(5000),
    SERVER_PORT_USERS: z.coerce.number().default(5001),
    SERVER_PORT_ORGANIZATIONS: z.coerce.number().default(5002),
    SERVER_PORT_PROJECTS: z.coerce.number().default(5001),
    DATABASE_URL_CORE: z.string().url(),
    DATABASE_URL_USERS: z.string().url(),
    DATABASE_URL_ORGANIZATIONS: z.string().url(),
    DATABASE_URL_PROJECTS: z.string().url(),

    SALT_ROUNDS: z.coerce.number().default(8),

    JWT_SECRET: z.string(),

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
    SERVER_PORT_CORE: process.env.SERVER_PORT_CORE,
    SERVER_PORT_USERS: process.env.SERVER_PORT_USERS,
    SERVER_PORT_ORGANIZATIONS: process.env.SERVER_PORT_ORGANIZATIONS,
    SERVER_PORT_PROJECTS: process.env.SERVER_PORT_PROJECTS,
    DATABASE_URL_CORE: process.env.DATABASE_URL_CORE,
    DATABASE_URL_USERS: process.env.DATABASE_URL_USERS,
    DATABASE_URL_ORGANIZATIONS: process.env.DATABASE_URL_ORGANIZATIONS,
    DATABASE_URL_PROJECTS: process.env.DATABASE_URL_PROJECTS,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    JWT_SECRET: process.env.JWT_SECRET,
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
