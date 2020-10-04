module.exports = {
  title: '个人笔记',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['link', { rel: 'stylesheet', href: '/css/index.css'}]
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"), // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};