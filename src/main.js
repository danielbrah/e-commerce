import './assets/sass/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './components/routes';
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(router).use(pinia).mount('#app')
