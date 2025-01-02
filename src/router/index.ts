import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Setting from '@/layout/Setting.vue'
import Login from '@/views/Login.vue'
import { getToken } from '@/helpers/getToken'
import Public from '@/layout/Public.vue'
import Register from '@/views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Public,
      meta: {
        requiredAuth: true,
      },
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
      ],
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: {
        requiredAuth: false,
      },
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (to.meta.requiredAuth && !token) {
    next({ name: 'login' })
  } else if (to.name == 'login' || (to.name == 'register' && token)) {
    next({ name: 'home' })
  }

  next()
})

export default router
