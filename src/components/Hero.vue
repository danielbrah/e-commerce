<script setup>
import { ref } from 'vue'

const shoe = ref(null)

function imageLoaded(){
    shoe.value.style.animation = 'left-shoe 550ms ease forwards';
}

// onMounted(() => {
//     shoe.value.children[0].addEventListener('load', () =>{
//         shoe.value.children[0]
//     })
// })

</script>

<template>
    <div id="hero">
        <div id="hero__text">
            <h1>Sneakers, sneakers, and <br>more sneakers!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestias vero amet, tenetur quisquam distinctio!</p>

            <div id="hero__text--buttons">
                <button @click="scrollTo">
                    View items
                </button>
            </div>

            <div ref="shoe" class="shoe__container">
                <img @load="imageLoaded" src="../assets/images/hero-left.png" alt="Left shoe" aria-hidden="true">
            </div>
            <img src="../assets/images/hero-right.png" alt="Right shoe" aria-hidden="true">
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/layouts/hero.scss';
    @import '../assets/sass/component/button.scss';
</style>