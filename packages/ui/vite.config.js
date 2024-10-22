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

function transformPath(originalPath) {
  const pathParts = originalPath.split('/')
  pathParts[pathParts.length - 1] = 'style/index.css'
  return pathParts.join('/')
}

function copyChunk() {
  return {
    name: 'copy-chunk',

    closeBundle() {
      fs.writeFileSync(toPath('./es/index.d.ts'), `export * from '../types'`)

      const files = globSync('./es/**/*.css').filter((file) => !file.includes('style'))

      for (let i = 0; i < files.length; i++) {
        const data = fs.readFileSync(files[i], 'utf8')
        fs.appendFileSync(toPath('./es/style.css'), data)
        const formatPath = transformPath(files[i])
        fs.writeFileSync(formatPath, data)
        fs.unlinkSync(files[i])
      }
    },
  }
}

const files = globSync('./src/**', { nodir: true })

export default defineConfig({
  plugins: [vue(), copyChunk()],
  build: {
    minify: false,
    lib: {
      entry: files,
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
