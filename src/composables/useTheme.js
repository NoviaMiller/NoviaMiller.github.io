import { ref } from 'vue'

// 初始主题：优先读取本地存储，否则默认浅色
const theme = ref(localStorage.getItem('theme') || 'light')

// 应用主题：写入 <html data-theme="..."> 并持久化
function apply(value) {
  document.documentElement.dataset.theme = value
  localStorage.setItem('theme', value)
}

// 首次加载时立即应用，避免页面闪烁
apply(theme.value)

/**
 * 明暗主题组合式函数
 * @returns {{ theme: import('vue').Ref<string>, toggle: () => void }}
 */
export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    apply(theme.value)
  }
  return { theme, toggle }
}
