<script setup>
import { onMounted, ref } from 'vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <Nav/>
    <router-view></router-view>
    <Footer/> <!-- footer -->
</template>