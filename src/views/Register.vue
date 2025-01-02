<script setup lang="ts">
import router from '@/router'
import { Register } from '@/store'
import { FormKit } from '@formkit/vue'
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toast-notification'

const toast = useToast()
const register = reactive({
  username: '',
  email: '',
  password: '',
})

const handleSubmit = async () => {
  const result = await Register(register)

  if (result.error) {
    toast.error(result.error)
  } else {
    toast.success('Registered succesfully')
  }
  router.push('/setting')
}
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="w-[600px]">
      <FormKit
        name="username"
        label="Username"
        placeholder="Enter the username"
        type="text"
        validation="required|length:3"
        v-model="register.username"
      />
      <FormKit
        name="email"
        label="Email"
        placeholder="Enter the email"
        type="email"
        validation="required|email"
        v-model="register.email"
      />
      <FormKit
        name="password"
        label="Password"
        placeholder="Enter the password"
        type="password"
        validation="required|length:6"
        v-model="register.password"
      />
      <RouterLink class="block mb-2 text-end text-blue_" to="/setting">Login</RouterLink>
      <FormKit class="w-full" type="submit" @click="handleSubmit">Register</FormKit>
    </div>
  </div>
</template>

<style>
.formkit-input {
  width: 100% !important;
}
</style>
