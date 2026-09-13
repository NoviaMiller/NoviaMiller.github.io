import { ref } from 'vue'

// 控制「敬请期待」弹窗的显示状态（项目模块暂未开发）
export const comingSoonOpen = ref(false)

export function openComingSoon() {
  comingSoonOpen.value = true
}

export function closeComingSoon() {
  comingSoonOpen.value = false
}
