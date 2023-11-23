<script setup>
    import { ref, onMounted, watch} from 'vue'
    import { useDataStore } from '../store/data'

    const dataStore = useDataStore()

    const productData = ref(null)

    onMounted(() => 
    {
        productData.value = dataStore.data
    })

    watch(() => dataStore.data, () => {
        productData.value = dataStore.data
    })
    </script>

<template>
    <div id="products">
        <h2 id="products__title">Products and stuff</h2>
        <div id="products__container">
            <div class="product" v-for="product in productData" :key="product.id">
                <img :src="product.image" alt="image">
                <h2>{{ product.title }}</h2>
                <router-link :to="`/preview-product/${productData.indexOf(product) + 1}`"><button>View</button></router-link>
                <h3>${{ (product.price).toFixed(2) }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/layouts/products.scss';
</style>