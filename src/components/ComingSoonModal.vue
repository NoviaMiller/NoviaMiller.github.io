<script setup>
// 「敬请期待」弹窗：项目模块暂未开发时的占位提示
import { onMounted, onUnmounted } from 'vue'
import { closeComingSoon, comingSoonOpen } from '../stores/ui'

// 支持 Esc 键关闭（挂到 window 上才能捕获全局键盘事件）
function onKeydown(e) {
  if (e.key === 'Escape') closeComingSoon()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <!-- 遮罩层：点击遮罩空白处关闭 -->
  <Teleport to="body">
    <div v-if="comingSoonOpen" class="modal-mask" @click.self="closeComingSoon">
      <div class="modal-box">
        <div class="modal-emoji">🚧</div>
        <h2 class="modal-title">敬请期待</h2>
        <p class="modal-desc">项目模块正在建设中，敬请期待～</p>
        <button class="pill-btn primary" @click="closeComingSoon">好的</button>
      </div>
    </div>
  </Teleport>
</template>
