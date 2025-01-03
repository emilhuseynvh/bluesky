import { getToken } from '@/helpers/getToken'
import type { LoginType } from '@/models/login'
import type { RegisterType } from '@/models/register'
import type { checkLikeType, PostType } from '@/models/types'
import { api } from '@/plugins/axios.plugin'

const token = getToken()

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

export const allPost = async () => {
  try {
    const result = await api.get('/post')

    return result.data
  } catch (err) {
    return { error: err }
  }
}

export const checkLike = async (obj: checkLikeType) => {
  try {
    let token = getToken()

    const result = await api.post('/like/check', obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return result.data
  } catch (err) {
    return { error: err }
  }
}

export const like = async (id: any) => {
  try {
    const result = await api.post('/like', id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return result.data
  } catch (err) {
    return { error: err }
  }
}

export const createPost = async (obj: PostType) => {
  try {
    const result = await api.post('/post', obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return result.data
  } catch (err) {
    return { error: err }
  }
}
