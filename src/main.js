import './assets/sass/main.scss'
import { createRouter, createWebHistory} from 'vue-router'
import { createApp } from 'vue'
import { routes } from './components/routes';
import App from './App.vue'


const router = createRouter({
    history: createWebHistory(), 
    routes
})

const app = createApp(App)
app.use(router).mount('#app')
