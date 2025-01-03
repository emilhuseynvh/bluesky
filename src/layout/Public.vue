<script setup lang="ts">
import Navbar from '@/components/Home/Navbar.vue'
</script>

<template>
  <div class="flex">
    <div class="w-1/4 flex justify-end border-r border-[#2e4052] pr-12 h-screen">
      <div>
        <Navbar />
      </div>
    </div>
    <div class="w-1/2">
      <RouterView />
    </div>
  </div>
</template>
