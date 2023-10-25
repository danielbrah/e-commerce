<script setup>
import { ref } from 'vue'
import Cart from '../components/Nav.vue';

defineProps({
    heroInViewport : Boolean
})

const links = ref([
    {link: '/about', display: 'About', id: 1},
    {link: '/contact', display: 'Contact', id: 2}
])
</script>

<template>
    <div id="nav-wrapper" :class="{ 'active' : !heroInViewport}">
        <div id="nav">
        <div id="nav__first">
            <router-link to="/" class="nav__dark"><img src="../assets/images/logo.svg" alt="Logo / Home"></router-link>
            <router-link to="/" class="nav__light"><img src="../assets/images/logo-light.svg" alt="Logo / Home"></router-link>

            <div id="nav__links">
                <router-link v-for="link in links" v-bind:to="link.link" :key="link.id">{{ link.display }}</router-link>
                <p></p>
            </div>
        </div>

        <div id="nav__second">
            <img class="nav__dark" src="./icons/icon-cart.svg" alt="Cart icon / Show items in cart">
            <img class="nav__light" src="./icons/icon-cart-light.svg" alt="Cart icon / Show items in cart">
            <img src="../assets/images/image-avatar.png" alt="Profile avatar">
        </div>
    </div>
    </div>
</template>

<style lang="scss">
@import '../assets/sass/layouts/nav.scss'
</style>