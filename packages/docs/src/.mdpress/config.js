const ecosystem = require("./ecosystem");

module.exports = () => ({
  head: [
    ["link", { rel: "icon", href: "/logo/600x600.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],

  plugins: [
    ["@mdpress/back-to-top"],
    ['serve'],
    ['smooth-scroll'],
    ['flowchart']
  ],

  locales: {
    "/en/": {
      lang: "en-US",
      title: "MdPress Community",
      description: "ecosystem for MdPress",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "MdPress 社区",
      description: "MdPress 生态系统",
    },
  },

  themeConfig: {
    repo: "LinFeng1997/mdpress-community",
    editLinks: true,
    docsDir: "packages/docs/src",
    locales: {
      "/en/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
      },
    },
    sidebar: {
      "/en/": getSidebar("Plugins", "Themes", "Tools"),
      "/zh/": getSidebar("插件", "主题", "工具"),
    },
  },

  // evergreen: () => !context.isProd,
});

const getSidebar = (plugins, themes, tools) => [
  {
    title: plugins,
    collapsable: true,
    children: ecosystem.plugins.map((name) => `plugins/${name}`),
  },
  {
    title: tools,
    collapsable: true,
    children: ecosystem.tools.map((name) => `tools/${name}`),
  },
];
