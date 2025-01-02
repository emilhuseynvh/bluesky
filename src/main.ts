import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { formkitConfig } from './plugins/formkit.plugin'
import { toastConfig } from './plugins/toast.plugin'

const app = createApp(App)

app.use(createPinia())
app.use(router)

toastConfig(app);

formkitConfig(app);

app.mount('#app');
