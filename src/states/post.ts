import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostModalStore = defineStore('postModal', () => {
  const isModalOpen = ref<boolean>(false)
  const parentId = ref<string | null>(null)

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value
  }

  const setParentId = (id: string) => {
    parentId.value = id
  }

  const clearParentId = () => {
    parentId.value = null
  }

  return { isModalOpen, toggleModal, parentId, setParentId, clearParentId }
})
