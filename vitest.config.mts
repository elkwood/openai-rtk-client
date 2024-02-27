import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    globals: true,
  },
})
