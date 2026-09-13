<script setup>
// 首页：仅展示自我介绍（字段来自 data/site.js，均为 mock）
import { site } from '../data/site'
</script>

<template>
  <div class="page home">
    <div class="home-card card">
      <!-- 头像 -->
      <div class="home-avatar">
        <img :src="site.avatar" :alt="site.name" />
      </div>

      <!-- 姓名 / 签名 -->
      <h1 class="home-name">{{ site.name }}</h1>
      <p class="home-tagline">{{ site.tagline }}</p>

      <!-- 自我介绍正文 -->
      <p class="home-intro">{{ site.intro }}</p>

      <!-- 个人标签（彩色胶囊） -->
      <div class="home-tags">
        <span v-for="t in site.tags" :key="t" class="chip">{{ t }}</span>
      </div>

      <!-- 链接按钮 -->
      <div class="home-links">
        <a class="pill-btn primary" :href="site.githubUrl" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a v-if="site.email" class="pill-btn" :href="`mailto:${site.email}`">联系我</a>
      </div>
    </div>
  </div>
</template>
