<script setup>
import { ref } from 'vue'
import Cart from '../components/Cart.vue';
import { useMenuStore } from '../store/openCart';

const menuState = useMenuStore()

// nav links
const links = ref([
    {link: '/about', display: 'About', id: 1},
    {link: '/contact', display: 'Contact', id: 2}
])

const handleEvent = function(e){
    if(!(e.target.closest('#cart') || e.target.closest('.cart__btn'))){
        menuState.toggleMenu()
        document.body.removeEventListener('click', handleEvent)
    }
}

const manageClick = function(){
   menuState.toggleMenu()
   document.body.addEventListener('click', handleEvent)
}
</script>

<template>
    <nav id="nav-wrapper">
        <div id="nav">
            <div id="nav__first">
                <router-link to="/" class="nav__dark"><img src="../assets/images/logo.svg" alt="Logo / Home"></router-link>
                <router-link to="/" class="nav__light"><img src="../assets/images/logo-light.svg" alt="Logo / Home"></router-link>

                <div id="nav__links">
                    <router-link 
                        v-for="link in links" 
                        v-bind:to="link.link" 
                        :key="link.id">{{ link.display }}
                    </router-link>
                </div>
            </div>

            <div id="nav__second">
                <img @click="manageClick()" class="nav__dark cart__btn" src="./icons/icon-cart.svg" alt="Cart icon / Show items in cart">
                <img @click="manageClick()" class="nav__light cart__btn" src="./icons/icon-cart-light.svg" alt="Cart icon / Show items in cart">
                <img src="../assets/images/image-avatar.png" alt="Profile avatar">
                <Cart/>
            </div>

            
        </div>
    </nav>
</template>

<style lang="scss">
@import '../assets/sass/layouts/nav.scss'
</style>