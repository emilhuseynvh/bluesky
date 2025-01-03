<script setup lang="ts">
import CommentIcon from '@/icons/CommentIcon.vue'
import LikeIcon from '@/icons/LikeIcon.vue'
import { toRaw } from 'vue'

const props = defineProps({
  posts: Object,
})

let data = props.posts
</script>

<template>
  <div class="border pl-5 pb-3 border-[#2e4052] pr-[15px] pb-2 pt-3">
    <div class="flex items-center gap-4">
      <img
        class="size-12 rounded-[50%] cursor-pointer"
        :src="
          data?.user?.avatar?.url
            ? 'http://localhost:3002' + data.user.avatar.url
            : 'https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:vv4utochmo7iborpdmbac5ul/bafkreihhyr3i3qrz57sdxuocixfjd6mggeqoeac5lstx73vvxf6jmb4taq@jpeg'
        "
        alt="Avatar"
      />

      <h2 class="text-white text-[1.5rem]">{{ data?.user?.username }}</h2>
    </div>
    <p class="mt-3 text-white text-[1rem] ml-3">{{ data?.content }}</p>
    <div class="w-[380px] my-5">
      <img
        v-if="data?.image?.url"
        class="w-full object-cover"
        :src="'http://localhost:3002' + data?.image?.url"
        alt="Post Image"
      />
    </div>
    <div class="flex gap-10">
      <div class="flex items-center gap-2 cursor-pointer">
        <CommentIcon />
        <p class="text-white text-sm">{{ data?.comment }}</p>
      </div>
      <div class="flex items-center gap-2 cursor-pointer">
        <LikeIcon />
        <p class="text-white text-sm">{{ data?.like }}</p>
      </div>
    </div>
  </div>
</template>
