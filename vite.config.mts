import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import { resolve } from 'path'
import packageJSON from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.ts'),
      name: 'default',
      fileName: 'library',
    },
    rollupOptions: {
      external: Object.keys(packageJSON.peerDependencies),
      plugins: [
        typescript({
          tsconfig: './tsconfig.json',
        }) as never,
      ],
    },
  },
})
