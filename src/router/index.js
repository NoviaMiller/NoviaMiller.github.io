import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from '../views/NotesView.vue'
import NoteDetailView from '../views/NoteDetailView.vue'

// 使用 hash 模式（#/xxx）：
// 静态托管（GitHub Pages）下无需服务端重写，刷新页面也不会 404。
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/notes', name: 'notes', component: NotesView },
    // :id 为笔记唯一标识，对应 data/notes.js 中的 id
    { path: '/notes/:id', name: 'note-detail', component: NoteDetailView },
    // 未知路径兜底跳回首页
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  // 每次切换路由回到页面顶部
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
