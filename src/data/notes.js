// ==========================================================================
// 笔记清单（mock 数据）
//
// 如何新增一篇笔记：
//   1. 在 public/notes/ 下新建 xxx.md 并写入内容；
//   2. 在下方 notes 数组中登记一条，字段说明见下。
//
// 字段说明：
//   id          - 唯一标识，路由 /notes/:id 使用，需与文件名保持一致
//   title       - 标题（陈列页显示为大粗字体）
//   description - 简介（陈列页显示为小字体）
//   cover       - 封面图 URL；留空 '' 时自动使用渐变占位封面
//   file        - 笔记 Markdown 文件的相对路径（相对于 public/）
//   date        - 发布日期（mock）
//   tags        - 标签（mock）
//   color       - 占位封面的配色（取自动森调色板，可选：teal/blue/yellow/pink/green/orange/purple）
// ==========================================================================
export const notes = [
  {
    id: 'hello-world',
    title: '你好，我的第一篇笔记',
    description: '欢迎来到我的笔记库，这里记录我学习与生活的点点滴滴。',
    cover: '', // 留空 → 使用默认占位封面
    file: 'notes/hello-world.md',
    date: '2026-09-13',
    tags: ['随笔', '欢迎'],
    color: 'teal',
  },
  {
    id: 'vue3-notes',
    title: 'Vue 3 学习笔记',
    description: '组合式 API、响应式原理与性能优化的一点点心得整理。',
    cover: '',
    file: 'notes/vue3-notes.md',
    date: '2026-09-10',
    tags: ['前端', 'Vue'],
    color: 'blue',
  },
  {
    id: 'markdown-guide',
    title: 'Markdown 语法速查',
    description: '一份常用的 Markdown 语法快速参考，写作时随手查阅。',
    cover: '',
    file: 'notes/markdown-guide.md',
    date: '2026-09-05',
    tags: ['工具', 'Markdown'],
    color: 'yellow',
  },
]
