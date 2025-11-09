import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: "Floydの导航站",
  description: "存放一些常用站点",
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.gif',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codeNoob2281/floyd-navigation' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/38375370' },
      { icon: 'qq', link: 'https://wpa.qq.com/msgrd?v=3&uin=2281461058&site=qq&menu=yes' },
      { icon: 'gmail', link: 'mailto:2281461058@qq.com' }
    ],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2025-present Floyd<br>Powered by <a href="https://github.com/maomao1996/vitepress-nav-template" target="_blank">maomao导航主题</a> and <a href="https://vitepress.dev" target="_blank">VitePress</a>',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'floyd.netcpu.top',
    },

    comment: {
      repo: 'codeNoob2281/floyd-navigation',
      repoId: 'R_kgDOQSCcfQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOQSCcfc4CxmA3',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
