import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '主页', link: '/' },
  {
    text: '个人网站', items: [
      { text: 'FloydのBlog', link: 'https://blog.netcpu.top/', target: '_blank' },
      { text: 'Floydの云盘', link: 'https://floyd.netcpu.top:5245/', target: '_blank' },
      { text: '节点状态监控', link: 'https://blog.netcpu.top:8000/', target: '_blank' },
    ]
  },
  {
    text: '友情链接', items: [
      { text: '加入星穹旅驿MC互通服', link: 'https://mcmall.netcpu.top/', target: '_blank' },
      { text: '小兔互联，开启云上旅程！', link: 'https://moebun.com/aff/RMYKBTKG', target: '_blank' },
      { text: '小兔导航', link: 'https://moe520.com/', target: '_blank' },
      // { text: '乐子Wiki', link: 'https://lezi.8aka.org/nav', target: '_blank' },
      // { text: 'ideafox的博客', link: 'https://ideafox.top/', target: '_blank' },
      // { text: 'simple-icons', link: 'https://icon-sets.iconify.design/simple-icons' },
    ]
  },
]
