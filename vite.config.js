import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base 设为相对路径 './'：
  // 这样打包产物既能部署在用户页根目录（NoviaMiller.github.io），
  // 也能部署在子目录（<user>.github.io/<repo>），无需再改配置。
  base: './',
  plugins: [vue()],
})
