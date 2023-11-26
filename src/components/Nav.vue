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
                <img @click="() => menuState.isOpened = true" class="nav__dark" src="./icons/icon-cart.svg" alt="Cart icon / Show items in cart">
                <img @click="() => menuState.isOpened = true" class="nav__light" src="./icons/icon-cart-light.svg" alt="Cart icon / Show items in cart">
                <img src="../assets/images/image-avatar.png" alt="Profile avatar">
                <Cart/>
            </div>

            
        </div>
    </nav>
</template>

<style lang="scss">
@import '../assets/sass/layouts/nav.scss'
</style>