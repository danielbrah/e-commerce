<script setup>
import { ref } from 'vue'
import Cart from '../components/Nav.vue';

defineProps({
    heroInViewport : Boolean
})

const links = ref([
    {link: '#', display: 'Collections', id: 1},
    {link: '#', display: 'Men', id: 2},
    {link: '#', display: 'Women', id: 3},
    {link: '#', display: 'About', id: 4},
    {link: '#', display: 'Contact', id: 5}
])
</script>

<template>
    <div id="nav-wrapper" :class="{ 'active' : !heroInViewport}">
        <div id="nav">
        <div id="nav__first">
            <a href=""><img src="../assets/images/logo.svg" alt="Logo / Home"></a>

            <div id="nav__links">
                <a v-for="link in links" v-bind:href="link.link" :key="link.id">{{ link.display }}</a>
            </div>
        </div>

        <div id="nav__second">
            <img src="./icons/icon-cart.svg" alt="Cart icon / Show items in cart">
            <img src="../assets/images/image-avatar.png" alt="Profile avatar">
        </div>
    </div>
    </div>
</template>

<style lang="scss">
@import '../assets/sass/layouts/nav.scss'
</style>