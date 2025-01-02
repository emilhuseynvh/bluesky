import { defaultConfig, plugin } from '@formkit/vue'
import type { App } from 'vue'

export function formkitConfig(app: App) {
  app.use(
    plugin,
    defaultConfig({
      theme: 'genesis',
    }),
  )
}
