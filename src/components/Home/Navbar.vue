<script setup lang="ts">
import HomeIcon from '@/icons/HomeIcon.vue'
import ProfileIcon from '@/icons/ProfileIcon.vue'
import SearchIcon from '@/icons/SearchIcon.vue'
import type { List } from '@/models/navbar'
import profileImg from '@/assets/img/profile.jpg'
import NewPostIcon from '@/icons/NewPostIcon.vue'
import { usePostModalStore } from '@/states/post'

const list: List[] = [
  {
    icon: HomeIcon,
    content: 'Home',
  },
  {
    icon: SearchIcon,
    content: 'Search',
  },
  {
    icon: ProfileIcon,
    content: 'Profile',
  },
]

const postModalStore = usePostModalStore();
</script>

<template>
  <div class="pt-6 pb-3">
    <img :src="profileImg" alt="Profile" class="w-12 h-12 rounded-[50%] ml-2.5" />
  </div>
  <div
    v-for="(item, i) in list"
    :key="i"
    class="text-white flex cursor-pointer items-center gap-4 p-3"
  >
    <component :is="item.icon"></component>
    <span class="text-[1.2rem] font-bold lg:block hidden">{{ item.content }}</span>
  </div>
  <button
    class="text-white hidden items-center lg:flex gap-2.5 bg-blue_ py-[11px] px-[20px] mt-4 rounded-[999px]"
  >
    <NewPostIcon />
    <span @click="postModalStore.toggleModal">New Post</span>
  </button>
</template>
