<script setup>
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
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/layouts/hero.scss';
    @import '../assets/sass/component/button.scss';
</style>