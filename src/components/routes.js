import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const routes = [
    {path: '/',  name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/contact', name: 'Contact', component: Contact}
]

export { routes }
