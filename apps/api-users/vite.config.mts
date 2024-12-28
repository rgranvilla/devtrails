import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
    coverage: {
      provider: 'v8',
      reporter: ['text', ['html', { subdir: 'coverage' }]],
      include: ['src/**/*'],
      exclude: ['prisma'],
    },
  },
})
