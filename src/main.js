import './assets/sass/main.scss'
import { createApp } from 'vue'
import { router } from './components/routes';
import App from './App.vue'

const app = createApp(App)
app.use(router).mount('#app')
