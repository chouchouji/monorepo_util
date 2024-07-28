import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/monorepo_util/',
  title: "monorepo util",
  description: "My monorepo util site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chouchouji/monorepo_util' }
    ]
  }
})
