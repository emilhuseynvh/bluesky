import type { LoginType } from '@/models/login'
import type { RegisterType } from '@/models/register'
import { api } from '@/plugins/axios.plugin'

export const Login = async (obj: LoginType) => {
  try {
    const result = await api.post('/auth/login', obj)

    return result.data
  } catch (err) {
    return { error: err }
  }
}

export const Register = async (obj: RegisterType) => {
  try {
    const result = await api.post('/auth/register', obj)

    return result.data
  } catch (err) {
    return { error: err }
  }
}
