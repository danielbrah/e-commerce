<script setup>
import { ref } from 'vue'
import Cart from '../components/Nav.vue';

defineProps({
    heroInViewport : Boolean
})

const links = ref([
    {link: '#', display: 'About', id: 1},
    {link: '#', display: 'Contact', id: 2}
])
</script>

<template>
    <div id="nav-wrapper" :class="{ 'active' : !heroInViewport}">
        <div id="nav">
        <div id="nav__first">
            <a class="nav__dark" href=""><img src="../assets/images/logo.svg" alt="Logo / Home"></a>
            <a class="nav__light" href=""><img src="../assets/images/logo-light.svg" alt="Logo / Home"></a>

            <div id="nav__links">
                <a v-for="link in links" v-bind:href="link.link" :key="link.id">{{ link.display }}</a>
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