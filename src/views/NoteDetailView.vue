<script setup>
// 笔记详情页：左侧目录（TOC）+ 右侧 Markdown 正文。
// 参考 hello-agents 的「侧边栏导航 + 正文」布局，方便后续持续扩展 md。
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'
import { notes } from '../data/notes'

const route = useRoute()
const router = useRouter()

// 初始化 markdown 渲染器
const md = new MarkdownIt({
  html: true,       // 允许笔记内嵌 HTML
  linkify: true,    // 自动识别链接
  typographer: true, // 智能引号等排版优化
})

const note = computed(() => notes.find((n) => n.id === route.params.id))

const rendered = ref('')   // 渲染后的 HTML 字符串
const toc = ref([])        // 目录条目：[{ id, text, level }]
const loading = ref(true)
const error = ref('')
const contentRef = ref(null)

// 为标题生成可用的锚点 id（保留中文，仅清理特殊字符）
function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w一-龥-]/g, '')
}

// 渲染完成后扫描正文标题，生成目录并设置锚点 id
function buildToc() {
  const el = contentRef.value
  if (!el) return
  const headings = el.querySelectorAll('h1, h2, h3')
  toc.value = []
  headings.forEach((h, i) => {
    const id = `${slugify(h.textContent)}-${i}`
    h.id = id
    toc.value.push({ id, text: h.textContent, level: Number(h.tagName[1]) })
  })
}

// 点击目录项平滑滚动到对应标题
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(async () => {
  // 找不到对应笔记时的兜底
  if (!note.value) {
    error.value = '笔记不存在'
    loading.value = false
    return
  }
  try {
    // 相对路径获取 Markdown 文件（BASE_URL 兼容根目录/子目录部署）
    const res = await fetch(import.meta.env.BASE_URL + note.value.file)
    if (!res.ok) throw new Error('笔记加载失败')
    const text = await res.text()
    rendered.value = md.render(text)
    await nextTick()
    buildToc()
  } catch (e) {
    error.value = e.message || '笔记加载失败'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="page note-detail">
    <!-- 返回按钮 -->
    <button class="back-btn pill-btn" @click="router.push('/notes')">← 返回笔记</button>

    <template v-if="note">
      <!-- 标题与元信息 -->
      <header class="note-header">
        <h1 class="note-detail-title">{{ note.title }}</h1>
        <div class="note-header-meta">
          <span>{{ note.date }}</span>
          <span v-for="t in note.tags" :key="t" class="note-tag">{{ t }}</span>
        </div>
      </header>

      <!-- 正文主体：目录 + 内容 -->
      <div class="note-body">
        <!-- 左侧目录 -->
        <aside v-if="toc.length" class="note-toc">
          <p class="toc-title">目录</p>
          <ul>
            <li v-for="item in toc" :key="item.id" :class="`level-${item.level}`">
              <a href="#" @click.prevent="scrollTo(item.id)">{{ item.text }}</a>
            </li>
          </ul>
        </aside>

        <!-- 右侧 Markdown 正文 -->
        <article ref="contentRef" class="markdown-body" v-html="rendered"></article>
      </div>
    </template>

    <!-- 加载中 / 错误态 -->
    <div v-else class="note-empty">
      <p v-if="loading">加载中…</p>
      <p v-else>{{ error }}</p>
    </div>
  </div>
</template>
