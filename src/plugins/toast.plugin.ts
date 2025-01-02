import type { App } from 'vue'
import ToastPlugin from 'vue-toast-notification'

export const toastConfig = (app: App) => {
  app.use(ToastPlugin, {
    position: 'top-center',
  })
}
