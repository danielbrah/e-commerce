<script setup>
import { ref } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Products from './components/Products.vue'

let isHeroInView = ref(null)

const catchIt = value => {
    isHeroInView.value = value
}

</script>

<template>
    <Nav :heroInViewport="isHeroInView"/>
    <Hero @heroInView="catchIt"/>
    <Products/>
</template>