---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Floyd 导航站'
  text: '技术、感想&杂七杂八'
  tagline: 以逻辑为刃，斩技术荆棘，恒者行远。
  image:
    src: /avatar.jpg
    alt: VitePress
  actions:
    - theme: brand
      text: 导航页面
      link: /nav/
    - theme: alt
      text: 访问博客
      link: https://blog.netcpu.top
      target: _blank

features:
  - title: 爱好
    details: 喜欢睡觉和玩Minecraft
    icon: 🎯
  - title: 职业
    details: 不告诉你~
    icon: 💼
  - title: 技能
    details: Java, Html, CSS, JavaScript
    icon: 🛠️
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}

.image-src {
  border-radius: 50%!important;
  height: 320px!important;
  width: 320px!important;
}

/*爱的魔力转圈圈*/
.image-src:hover {
  transform: translate(-50%, -50%) rotate(300turn);
  transition: transform 59s 0s cubic-bezier(0.3, 0, 0.8, 1);
}

.VPButton {
  transition: transform 0.3s ease!important;
}


.VPButton:hover {
  transform: translateY(-5px);
}

.VPFeature {
    transition: transform 0.3s ease!important;
}

.VPFeature:hover {
  transform: translateY(-5px);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
