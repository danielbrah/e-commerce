<script setup>
import Hero from './Hero.vue'
import Products from './Products.vue'

const emits = defineEmits(['heroInView'])

</script>

<template>
    <Hero @heroInView="(condition) => $emit('heroInView', condition)"/>
    <Products/>
</template>

<style lang="scss" scoped>
</style>