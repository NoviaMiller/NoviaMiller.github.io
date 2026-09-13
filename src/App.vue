<script setup>
// 布局外壳：顶部固定导航栏 + 路由视图 + 全局弹窗 + 页脚
import NavBar from './components/NavBar.vue'
import ComingSoonModal from './components/ComingSoonModal.vue'
</script>

<template>
  <div class="app-shell">
    <!-- 顶部导航栏：永远固定不变 -->
    <NavBar />

    <!-- 主内容区：根据路由渲染对应视图 -->
    <main class="app-main">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="app-footer">© 2026 Novia · 用 ❤️ 和动森风格构建</footer>

    <!-- 全局「敬请期待」弹窗 -->
    <ComingSoonModal />
  </div>
</template>
