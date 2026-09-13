# Vue 3 学习笔记

记录我在学习 Vue 3 过程中的一些心得，随时补充。

## 组合式 API

组合式 API（Composition API）是 Vue 3 的核心特性，让逻辑复用更加方便。

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

## 响应式原理

Vue 3 使用 `Proxy` 替代了 Vue 2 的 `Object.defineProperty`：

1. 支持数组索引与 `length` 修改
2. 支持 `Map` / `Set` 等集合类型
3. 更少的边界情况

### 为什么更快

- 编译期静态分析
- 静态提升（hoisted）
- 更好的 tree-shaking

## 一点心得

> 组合式 API 让代码组织更灵活，但也别过度抽象，简单场景用 `<script setup>` 就好。

配合 **Vite** 使用，开发体验非常顺滑。
