# Novia 的笔记库

一个渲染 **Markdown** 的笔记库，采用「动物森友会（Animal Crossing）」治愈系 UI 风格，部署在 GitHub Pages。

## 技术栈

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [vue-router](https://router.vuejs.org/)（hash 模式，兼容 Pages 静态托管）
- [markdown-it](https://github.com/markdown-it/markdown-it)（Markdown 渲染）

## 功能

- 顶部固定导航栏：**首页 / 笔记 / 项目**，左上角实时时间（hh:mm），右上角明暗切换 + GitHub 头像。
- **首页**：自我介绍（mock 字段）。
- **笔记**：笔记陈列页，每行一条（左图右文），点击进入详情。
- **笔记详情**：左侧目录（TOC）+ 右侧 Markdown 正文，便于后续 md 扩展。
- **项目**：弹窗「敬请期待」。

## 本地开发

```bash
npm install
npm run dev        # 启动开发服务器
npm run build      # 打包到 dist/
npm run preview    # 本地预览打包产物
```

## 部署到 GitHub Pages

1. 在仓库 **Settings → Pages → Build and deployment** 中，将 Source 改为 **GitHub Actions**。
2. 推送到 `main` 分支，`.github/workflows/deploy.yml` 会自动构建并部署。

## 目录结构

```
├── index.html                  # Vite 入口 HTML
├── vite.config.js              # base: './'，兼容根目录/子目录部署
├── public/
│   └── notes/                  # 笔记 Markdown 源文件（新增笔记放这里）
├── src/
│   ├── main.js                 # 应用入口
│   ├── App.vue                 # 布局外壳（导航栏 + 路由视图 + 弹窗）
│   ├── router/index.js         # 路由配置
│   ├── styles/main.css         # 动森风格主题样式
│   ├── data/
│   │   ├── site.js             # 站点/个人信息配置
│   │   └── notes.js            # 笔记清单（新增笔记在此登记）
│   ├── composables/useTheme.js # 明暗主题状态
│   ├── stores/ui.js            # 弹窗等 UI 状态
│   ├── components/             # 导航栏、时钟、主题切换、笔记卡片等
│   └── views/                  # 首页 / 笔记 / 笔记详情
└── .github/workflows/deploy.yml
```

## 如何新增一篇笔记

1. 在 `public/notes/` 下新建 `xxx.md`，写入内容。
2. 在 `src/data/notes.js` 的 `notes` 数组中登记一条（`id`、`title`、`description`、`file` 等）。
