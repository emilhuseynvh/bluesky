<script setup lang="ts">
import type { LoginType } from '@/models/login'
import router from '@/router'
import { Login } from '@/store'
import { FormKitSchema } from '@formkit/vue'
import { reactive, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useToast } from 'vue-toast-notification'

const toast = useToast()

const username = ref('')
const password = ref('')

const handleSubmit = async () => {
  const login = {
    username: username.value,
    password: password.value,
  }
  const result = await Login(login)

  if (result.error) {
    toast.error(result.error.response.data.error)
  } else {
    toast.success('Logged succesfully')
    localStorage.setItem('token', JSON.stringify(result.token))
    router.push('/')
  }
  router.push('/')
}

</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="w-[600px]">
      <FormKit
        type="text"
        name="username"
        label="Username"
        placeholder="Enter the username"
        validation="required|length:3"
        v-model="username"
      />
      <FormKit
        type="password"
        name="password"
        label="Password"
        placeholder="Enter the password"
        validation="required|length:3"
        v-model="password"
      />
      <RouterLink class="text-blue_ block text-end mb-2" to="/register">Register</RouterLink>
      <FormKit type="submit" @click="handleSubmit"> Login </FormKit>
    </div>
  </div>
</template>

<style>
label {
  color: #fff !important;
}
input {
  color: #fff !important;
}
.formkit-wrapper {
  max-width: 600px !important;
}
</style>
