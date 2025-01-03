<script setup lang="ts">
import Post from '@/components/Home/Post.vue'
import PostModal from '@/components/PostModal.vue'
import { allPost } from '@/store'
import { onMounted, ref, toRaw } from 'vue'

let posts = ref([])
const loading = ref<boolean>(true)

onMounted(async () => {
  const result = await allPost()
  posts.value = result
  loading.value = false
})
</script>

<template>
  <div v-for="item in posts">
    <Post v-if="!loading" :posts="item" />
    <PostModal />
  </div>
</template>
