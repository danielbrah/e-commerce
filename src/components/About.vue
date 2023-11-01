<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Observer from './observer';

const about1 = ref(null)

let observerTitle

let observeCards = []

onMounted(() => {
    window.scrollTo(0, 0)
    observerTitle = new Observer(about1.value, document.getElementById('nav-wrapper'))

    // push new Observer objects
    Array.from(document.querySelectorAll('.about__card'), el => observeCards.push(new Observer(el, null, {root: null, rootMargin: '-150px'})))
})

onBeforeUnmount(() => {
    observerTitle.cleanup()
    observerTitle = null

    observeCards.forEach(card => 
    {
        card.cleanup()
    })

    observeCards = []
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
                    <div class="img-container">
                        <img src="../assets/images/group.jpg" alt="Group">
                    </div>

                    <div>
                        <h2>Our team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius quidem eos? Eveniet, 
                        quisquam perspiciatis magni hic quidem atque minus necessitatibus, sint expedita facilis vero 
                        aspernatur numquam est dolorem ab velit quia amet, laudantium dolore.</p>
                    </div>
                </div>

                <div class="about__card">
                    <div>
                        <h2>Our team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius quidem eos? Eveniet, 
                        quisquam perspiciatis magni hic quidem atque minus necessitatibus, sint expedita facilis vero 
                        aspernatur numquam est dolorem ab velit quia amet, laudantium dolore.</p>
                    </div>
                    <div class="img-container">
                        <img src="../assets/images/group.jpg" alt="Group">
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