<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue'
import Observer from './observer'

const shoe = ref(null)
const hero1 = ref(null)
let observer

function imageLoaded(){
    shoe.value.style.animation = 'drop 850ms ease forwards';
    shoe.value.children[0].style.animation = 'rotate 850ms ease forwards' // The shoe itself
}

const scrollTo = () => document.querySelector("#products").scrollIntoView({"behavior": 'smooth'})

onMounted(() => {
    observer = new Observer(hero1.value, document.getElementById('nav-wrapper'))
})

onBeforeUnmount(() => {
    observer.cleanup()
    observer = null
})
</script>

<template>
    <div ref="hero1" id="hero">
        <div id="hero__text">
            <h1>Welcome to the <br><span>Sneakers</span> shop!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestias vero amet, tenetur quisquam distinctio!</p>

            <div id="hero__text--buttons">
                <button @click="scrollTo">
                    View items
                </button>
            </div>

            <div style="user-select: none;" ref="shoe" class="shoe__container">
                <img @load="imageLoaded" src="../assets/images/hero-left.png" alt="Sneakers running shoes" aria-hidden="true">
            </div>
            <img style="user-select: none;" src="../assets/images/hero-right.png" alt="Sneakers running shoes" aria-hidden="true">
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/layouts/hero.scss';
    @import '../assets/sass/component/button.scss';
</style>