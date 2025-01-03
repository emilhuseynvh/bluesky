<script setup lang="ts">
import Post from '@/components/Home/Post.vue'
import { allPost } from '@/store'
import { onMounted, ref, toRaw } from 'vue'

let posts = ref([])
const loading = ref<boolean>(true)

onMounted(async () => {
  const result = await allPost()
  posts.value = result
  loading.value = false
  console.log(toRaw(posts.value));
})

</script>

<template>
  <div v-for="item in posts">
    <Post v-if="!loading" :posts="item" />
  </div>
</template>
