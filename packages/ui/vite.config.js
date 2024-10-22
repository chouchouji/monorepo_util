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

function createIndexCssPath(path) {
  const paths = path.split('/')
  paths[paths.length - 1] = 'style/index.css'

  return paths.join('/')
}

/**
 * 将文件夹名称转化为文件名称
 * @param {string} folder 文件夹
 * @returns {string}
 */
function formatComponentName(folder) {
  const formatName = folder
    .split('-')
    .map((splitName) => {
      return splitName.charAt(0).toUpperCase() + splitName.slice(1).toLowerCase()
    })
    .join('')

  return formatName
}

function formatChunk() {
  return {
    name: 'format-chunk',

    closeBundle() {
      // add index.d.ts
      fs.writeFileSync(toPath('./es/index.d.ts'), `export * from '../types'`)

      // move css files
      const cssFilePaths = globSync('./es/**/*.css').filter((file) => !file.includes('style'))

      cssFilePaths.forEach((path) => {
        // read css chunk file data
        const data = fs.readFileSync(path, 'utf8')
        // append it to style.css (it is the union of all styles)
        fs.appendFileSync(toPath('./es/style.css'), data)
        // create style folder and index.css, write data into it
        const formatPath = createIndexCssPath(path)
        fs.writeFileSync(formatPath, data)
        // delete css chunk file
        fs.unlinkSync(path)
      })

      const indexMjsFilePaths = globSync('./es/**/index.mjs')
      const indexMjsFileCount = indexMjsFilePaths.length

      const componentImports = []
      const componentExports = []

      indexMjsFilePaths.forEach((path, index) => {
        const [_format, folder, fileName] = path.split('/')

        componentExports.push(`export * from './${folder}/${fileName}'\n`)

        const componentName = formatComponentName(folder)
        const isLastComponent = index === indexMjsFileCount - 1

        componentImports.push(`import ${componentName} from './${folder}/${fileName}'\n${isLastComponent ? '\n' : ''}`)
      })

      const installFunction = indexMjsFilePaths.reduce((pre, file, index) => {
        const [_format, folder] = file.split('/')

        const componentName = formatComponentName(folder)
        const isLastComponent = index === indexMjsFileCount - 1

        return pre + `  ${componentName}.install && app.use(${componentName})${isLastComponent ? '\n}' : '\n'}`
      }, `\n\nfunction install(app) {\n`)

      const exportAll = indexMjsFilePaths.reduce((pre, file, index) => {
        const [_format, folder] = file.split('/')

        const componentName = formatComponentName(folder)
        const isLastComponent = index === indexMjsFileCount - 1

        return pre + `  ${componentName},${isLastComponent ? '\n}' : '\n'}`
      }, `\n\nexport {\n  install,\n`)

      const exportDefault = indexMjsFilePaths.reduce((pre, file, index) => {
        const [_format, folder] = file.split('/')

        const componentName = formatComponentName(folder)
        const isLastComponent = index === indexMjsFileCount - 1

        return pre + `  ${componentName},${isLastComponent ? '\n}' : '\n'}`
      }, `\n\nexport default {\n  install,\n`)

      fs.appendFileSync(toPath('./es/index.mjs'), componentImports.join(''))
      fs.appendFileSync(toPath('./es/index.mjs'), componentExports.join(''))
      fs.appendFileSync(toPath('./es/index.mjs'), installFunction)
      fs.appendFileSync(toPath('./es/index.mjs'), exportAll)
      fs.appendFileSync(toPath('./es/index.mjs'), exportDefault)
    },
  }
}

const files = globSync('./src/**', { nodir: true })

export default defineConfig({
  plugins: [vue(), formatChunk()],
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
        '@ant-design/icons-vue',
        'clipboard',
        '@monorepo_util/hooks',
        '@monorepo_util/shared',
      ],
      output: [
        {
          format: 'es',
          entryFileNames: (chunkInfo) => `${chunkInfo.name.replace('.vue', '')}.mjs`,
          preserveModules: true,
          dir: resolve(cwd(), 'es'),
        },
      ],
    },
  },
})
