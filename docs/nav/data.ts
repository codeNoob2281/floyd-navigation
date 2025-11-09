import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'Minecraft开服教程',
    items: [
      {
        icon: 'https://nitwikit.8aka.cn/img/book.png',
        title: '笨蛋MC开服教程',
        // desc: '从零开始，简单易懂，让你轻松搭建属于自己的服务器世界',
        link: 'https://nitwikit.8aka.cn',
      },
      {
        icon: 'https://mcrain.top/home-icon.png',
        title: 'Easywiki',
        // desc: '一站通式服主文档',
        link: 'https://mcrain.top',
      },
      {
        icon: 'https://simpfun.cn/logo.png',
        title: '简幻欢社区文档',
        // desc: '简幻欢社区文档',
        link: 'https://www.yuque.com/simpfox/simpdoc/main',
      },
    ],
  },
  {
    title: 'Minecraft资源',
    items: [
      {
        icon: 'https://modrinth.com/favicon-light.ico',
        title: 'Modrinth',
        link: 'https://modrinth.com',
      },
      {
        icon: 'https://static-beta.curseforge.com/images/favicon.ico',
        title: 'CurseForge',
        link: 'https://www.curseforge.com',
      },
      {
        icon: 'https://static.spigotmc.org/img/spigot.png',
        title: 'SpigotMC',
        link: 'https://www.spigotmc.org',
      },
    ]
  },
  {
    title: '工具&框架',
    items: [
      {
        icon: 'https://raw.githubusercontent.com/LLOneBot/LLOneBot/main/logo.jpg',
        title: 'llonebot',
        desc: 'qq机器人框架',
        link: 'https://llonebot.com/guide/getting-started',
      },
      {
        icon: 'https://mclo.gs/img/favicon.ico',
        title: 'mclo.gs',
        desc: 'MC日志分享工具',
        link: 'https://mclo.gs/',
      },
    ]
  },
  {
    title: '个人站点',
    items: [
      {
        icon: 'https://blog.netcpu.top/upload/logo.png',
        title: 'Floyd的博客',
        link: 'https://blog.netcpu.top/',
      },
      {
        icon: 'https://res.oplist.org/logo/logo.svg',
        title: 'Floyd的网盘',
        link: 'https://floyd.netcpu.top:5245/',
      },
      {
        icon: 'https://img.fastmirror.net/s/2025/10/21/68f7a5d49a0d5.png',
        title: '服务器节点状态监控',
        link: 'https://blog.netcpu.top:8000',
      },
    ],
  },
  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc',
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: '腾讯视频',
        // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
        link: 'https://v.qq.com',
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: '哔哩哔哩',
        // desc: '',
        link: 'https://www.bilibili.com',
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        // desc: '',
        link: 'https://www.youtube.com',
      },
      {
        icon: '/icons/twitter.svg',
        title: 'Twitter',
        // desc: '',
        link: 'https://twitter.com',
      },
      {
        icon: '/icons/pixiv.png',
        title: 'Pixiv',
        // desc: '',
        link: 'https://www.pixiv.net',
      },
    ],
  },
]
