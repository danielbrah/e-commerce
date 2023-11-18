import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import ProductDetails from '../components/ProductDetails.vue'

const routes = [
    {path: '/',  name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/:pathMatch(.*)*', name: 'Not found', component: Home},
    {path: '/contact', name: 'Contact', component: Contact}, 
    {path: '/preview-product/:id', name: 'Preview', component: ProductDetails, props: true}
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export { router }