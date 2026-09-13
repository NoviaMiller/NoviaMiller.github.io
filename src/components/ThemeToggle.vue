<script setup>
// 明暗切换按钮：浅色显示月亮，暗色显示太阳
import { useTheme } from '../composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    :title="theme === 'light' ? '切换到暗色模式' : '切换到浅色模式'"
    @click="toggle"
  >
    {{ theme === 'light' ? '🌙' : '☀️' }}
  </button>
</template>
