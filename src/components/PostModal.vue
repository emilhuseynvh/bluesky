<script setup lang="ts">
import { getUser } from '@/helpers/getUser'
import { usePostModalStore } from '@/states/post'
import { allPost, createPost } from '@/store'
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toast-notification'

const postModalStore = usePostModalStore()
const post = reactive({
  content: '',
})

const toast = useToast()

const user = getUser()

const handleCreate = async () => {
  const parentId = postModalStore.parentId
  const payload: any = {
    
    ...(parentId ? { parentId } : {}),
    ...post
  }

  const result = await createPost(payload)

  console.log(result)

  location.reload()

  if (!result?.message) {
    toast.error(result?.error || 'Error')
  }
}
</script>

<template>
  <div v-if="postModalStore.isModalOpen">
    <div class="fixed inset-0 z-10 bg-[#00000031] w-screen h-screen">
      <div
        class="w-[600px] relative h-[330px] mx-auto mt-20 border border-[#364b61] bg-[#161e27] opacity-100 rounded-xl"
      >
        <p
          @click="postModalStore.toggleModal"
          class="text-blue_ absolute hover:bg-[#133f6d] rounded-3xl px-2 pt-1 pb-1.5 top-2 left-1.5 text-lg font-semibold cursor-pointer"
        >
          Cancel
        </p>
        <button
          @click="handleCreate"
          class="absolute top-3 right-3 bg-[#0a5fba] text-white py-1 px-3 rounded-[55px]"
        >
          Share
        </button>
        <div class="mt-14 ml-3 mr-5 flex gap-3">
          <img
            class="size-14 object-cover"
            :src="
              user?.avatar?.url
                ? 'http://localhost:3002' + user?.avatar?.url
                : 'https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:vv4utochmo7iborpdmbac5ul/bafkreihhyr3i3qrz57sdxuocixfjd6mggeqoeac5lstx73vvxf6jmb4taq@jpeg'
            "
            alt="Avatar"
          />
          <textarea
            placeholder="What's up"
            v-model="post.content"
            class="bg-transparent resize-none mt-4 outline-none w-full text-white"
            rows="8"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  clip-path: circle();
}
</style>
