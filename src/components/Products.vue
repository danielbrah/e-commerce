<script setup>
    import { ref, onMounted} from 'vue'
</script>

<template>
    <div id="products">
        <h2 id="products__title">Products and stuff</h2>
        <div id="products__container">
            <div class="product" v-for="product in $products" :key="product.id">
                <!-- <img src="" alt=""> -->
                <h2>{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <button>View</button>
                <h3>${{ product.price }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/layouts/products.scss';
</style>