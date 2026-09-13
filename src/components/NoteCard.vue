<script setup>
// 笔记卡片：一行一条，左侧封面（缺省用渐变占位），右侧标题 + 简介
import { computed } from 'vue'

// 占位封面的渐变配色（取自动森 NookPhone 调色板）
const PALETTE = {
  teal: ['#82d5bb', '#5bb89b'],
  blue: ['#889df0', '#6a82e0'],
  yellow: ['#f7cd67', '#e0b34d'],
  pink: ['#f8a6b2', '#e18c9a'],
  green: ['#8ac68a', '#6fae6f'],
  orange: ['#e59266', '#cf7a4f'],
  purple: ['#b77dee', '#9d63d4'],
}

const props = defineProps({
  note: { type: Object, required: true },
})

// 未上传封面时，根据 note.color 生成对应的渐变背景
const gradient = computed(() => {
  const [c1, c2] = PALETTE[props.note.color] || PALETTE.teal
  return `linear-gradient(135deg, ${c1}, ${c2})`
})
</script>

<template>
  <!-- 点击整张卡片进入笔记详情 -->
  <router-link :to="`/notes/${note.id}`" class="note-card">
    <!-- 左侧封面 -->
    <div class="note-cover" :style="note.cover ? undefined : { background: gradient }">
      <img v-if="note.cover" :src="note.cover" :alt="note.title" class="cover-img" />
      <span v-else class="cover-emoji">📖</span>
    </div>

    <!-- 右侧信息 -->
    <div class="note-info">
      <h3 class="note-title">{{ note.title }}</h3>
      <p class="note-desc">{{ note.description }}</p>
      <div class="note-meta">
        <span class="note-date">{{ note.date }}</span>
        <span v-for="t in note.tags" :key="t" class="note-tag">{{ t }}</span>
      </div>
    </div>

    <!-- 右侧箭头 -->
    <span class="note-arrow">›</span>
  </router-link>
</template>
