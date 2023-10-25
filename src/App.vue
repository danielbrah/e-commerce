<script setup>
import { onMounted, ref } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Products from './components/Products.vue'

const emits = defineEmits(['heroInView'])

let isHeroInView = ref(null)

const catchIt = value => isHeroInView.value = value

</script>

<template>
    <Nav :heroInViewport="isHeroInView"/>
    <router-view @heroInView="catchIt"></router-view>
</template>