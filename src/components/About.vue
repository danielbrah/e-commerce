<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { observer, unobserve } from './observer';

const about1 = ref(null)

onMounted(() => {
    observer(about1.value, document.getElementById('nav-wrapper'))
})

onBeforeUnmount(() => {
    unobserve()
})

const emits = defineEmits(['heroInView'])
</script>

<template>
    <div ref="about1" id="about">
        <div id="about__title">
            <h1>About Us</h1>
        </div>

        <div id="about__content">
            <div id="about__content--wrapper">
                
            </div>
        </div>
    </div>

    <div id="test"></div>
</template>

<style lang="scss" scoped>
    @import '../assets/sass/pages/about.scss'
</style>