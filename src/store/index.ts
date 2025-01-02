import type { LoginType } from '@/models/login'
import { api } from '@/plugins/axios.plugin'

export const Login = async (obj: LoginType) => {
  try {
    const result = await api.post('/auth/login', obj)

    return result.data
  } catch (err) {
    return { error: err }
  }
}
