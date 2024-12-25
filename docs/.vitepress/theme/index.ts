// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import ui from '@monorepo_util/ui/es/index.mjs'
import '@monorepo_util/ui/es/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ui)
  },
}
