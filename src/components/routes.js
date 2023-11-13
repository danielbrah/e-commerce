import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import ProductDetails from '../components/ProductDetails.vue'

const routes = [
    {path: '/',  name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/contact', name: 'Contact', component: Contact}, 
    {path: '/preview-product', name: 'Preview', component: ProductDetails}
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export { router }