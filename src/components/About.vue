<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Observer from './observer';

const about1 = ref(null)

// const aboutContent = [ 
//     {src: "/src/assets/images/group.jpg", heading: 'Some heading', paragraph: 'Some trext to with picture', alt: 'Group', key: 1}
// ]

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
    <div id="about">
        <div ref="about1" id="about__title">
            <h1>About Us</h1>
        </div>

        <div id="about__content">
            <div id="about__content--wrapper">
                <div class="about__card">
                    <img src="../assets/images/group.jpg" alt="Group">
                    <div>
                        <h2>Some heading</h2>
                        <p>Some text to go with the picture.</p>
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