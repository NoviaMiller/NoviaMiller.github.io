<script setup>
// 左上角时钟：每秒刷新，显示 hh:mm 格式
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref('')

// 补零并格式化为 hh:mm
function tick() {
  const d = new Date()
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  time.value = `${hh}:${mm}`
}

let timer = null
onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <span class="clock" title="当前时间">{{ time }}</span>
</template>
