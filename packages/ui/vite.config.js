import { defineConfig } from 'vite'
import { resolve } from 'path'
import { cwd } from 'process'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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
