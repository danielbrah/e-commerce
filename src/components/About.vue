<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Observer from './observer';

const about1 = ref(null)

const aboutContent = [ 
    {src: "/src/assets/images/group.jpg", heading: 'Some heading', paragraph: 'Some trext to with picture', alt: 'Group', key: 1}
]

let observer

onMounted(() => {
    window.scrollTo(0, 0)
    observer = new Observer(about1.value, document.getElementById('nav-wrapper'))
})

onBeforeUnmount(() => {
    observer.cleanup()
    observer = null
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
                <div class="about__card" v-for="card in aboutContent" :key="card.key">
                    <img :src="card.src" :alt="card.alt">
                    <div>
                        <h2>{{ card.heading }}</h2>
                        <p>{{ card.paragraph }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="test"></div>
</template>

<style lang="scss" scoped>
    @import '../assets/sass/pages/about.scss'
</style>