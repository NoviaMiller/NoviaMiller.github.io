import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

// 创建 Vue 应用实例，挂载路由，再挂载到 #app
createApp(App).use(router).mount('#app')
