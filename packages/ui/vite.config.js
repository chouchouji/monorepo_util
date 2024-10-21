import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import { cwd } from 'process'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

function toPath(path) {
  return fileURLToPath(new URL(path, import.meta.url))
}

function copyTypes() {
  return {
    name: 'copy-types',

    closeBundle() {
      fs.copyFileSync(toPath('./types/index.d.ts'), toPath('./es/index.d.ts'))
    },
  }
}

export default defineConfig({
  plugins: [vue(), copyTypes()],
  build: {
    minify: false,
    lib: {
      entry: resolve(cwd(), './src/index.js'),
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
          entryFileNames: '[name].mjs',
          preserveModules: true,
          dir: resolve(cwd(), 'es'),
        },
        {
          format: 'cjs',
          entryFileNames: 'businessUI.cjs.js',
          exports: 'named',
          dir: resolve(cwd(), 'lib'),
        },
      ],
    },
  },
})
