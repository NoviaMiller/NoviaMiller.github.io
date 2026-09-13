<script setup>
// 笔记陈列页：逐条展示笔记卡片
import { notes } from '../data/notes'
import NoteCard from '../components/NoteCard.vue'
</script>

<template>
  <div class="page">
    <h2 class="swallowtail page-title">我的笔记</h2>
    <p class="page-subtitle">这里是我的笔记陈列，点击任意一条进入阅读。</p>

    <div class="note-list">
      <NoteCard v-for="n in notes" :key="n.id" :note="n" />
    </div>
  </div>
</template>
