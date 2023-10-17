import './assets/sass/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { products } from './productData'

const app = createApp(App)
app.config.globalProperties.$products = products
app.mount('#app')
