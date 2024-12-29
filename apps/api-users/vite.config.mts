import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsConfigPaths()],
  resolve: {
    alias: {
      'vitest-environment-prisma': 'prisma/vitest-environment-prisma',
    },
  },
  test: {
    environmentMatchGlobs: [['src/application/controllers/**', 'prisma']],
    clearMocks: true,
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', ['html', { subdir: 'coverage' }]],
      include: [
        'src/application/controllers/**/*.ts',
        'src/application/dtos/**/*.ts',
        'src/application/routes/**/*.ts',
        'src/domain/entities/**/*.ts',
        'src/domain/use-cases/**/*.ts',
        'src/infra/mappers/**/*.ts',
        'src/infra/repositories/**/*.ts',
        'src/shared/errors/**/*.ts',
        'src/shared/utils/**/*.ts',
      ],
      exclude: [
        'prisma',
        'docs',
        'coverage',
        'dist',
        'node_modules',
        'src/@types',
        'src/app.ts',
        'src/server.ts',
        'src/infra/repositories/*.ts',
        'src/interfaces/middlewares',
      ],
    },
  },
})
