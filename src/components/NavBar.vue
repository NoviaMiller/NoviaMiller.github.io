<script setup>
// 顶部导航栏：左侧时钟 | 中间导航（首页/笔记/项目）| 右侧明暗切换 + GitHub 头像
import ClockDisplay from './ClockDisplay.vue'
import ThemeToggle from './ThemeToggle.vue'
import { site } from '../data/site'
import { openComingSoon } from '../stores/ui'
</script>

<template>
  <header class="navbar">
    <!-- 左上角：当前时间（hh:mm） -->
    <div class="navbar-left">
      <ClockDisplay />
    </div>

    <!-- 中间：三个导航入口，居中显示 -->
    <nav class="navbar-center">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/notes" class="nav-link">笔记</router-link>
      <!-- 项目暂未开发：点击弹出「敬请期待」弹窗，而非跳转 -->
      <button class="nav-link" @click="openComingSoon">项目</button>
    </nav>

    <!-- 右上角：明暗切换按钮 + GitHub 头像 -->
    <div class="navbar-right">
      <ThemeToggle />
      <a
        :href="site.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="avatar-link"
        title="我的 GitHub 主页"
      >
        <img :src="site.avatar" :alt="`${site.name} 的 GitHub 头像`" class="avatar" />
      </a>
    </div>
  </header>
</template>
