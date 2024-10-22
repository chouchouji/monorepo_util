import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import { cwd } from 'process'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { globSync } from 'glob'

function toPath(path) {
  return fileURLToPath(new URL(path, import.meta.url))
}

function copyTypes() {
  return {
    name: 'copy-types',

    closeBundle() {
      fs.writeFileSync(toPath('./es/index.d.ts'), `export * from '../types'`)
    },
  }
}

const files = globSync('./src/**', { nodir: true })

export default defineConfig({
  plugins: [vue(), copyTypes()],
  build: {
    minify: false,
    lib: {
      entry: files
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: [
        'vue',
        'ant-design-vue',
        '@arco-design/web-vue/es/icon',
        'clipboard',
        '@monorepo_util/hooks',
        '@monorepo_util/shared',
      ],
      output: [
        {
          format: 'es',
          entryFileNames: (chunkinfo) => `${chunkinfo.name.replace('.vue', '')}.mjs`,
          preserveModules: true,
          dir: resolve(cwd(), 'es'),
        },
      ],
    },
  },
})
