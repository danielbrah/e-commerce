<script setup>
    import { gsap } from 'gsap'
    import { useMenuStore } from '../store/openCart';
    import { ref } from 'vue';

    const menuState = useMenuStore()

</script>

<template>
    <div id="cart" :class="{ 'active': menuState.isOpened }">
        <h2>Cart</h2>
    </div>
</template>

<style lang="scss">
@import '../assets/sass/layouts/cart.scss'
</style>