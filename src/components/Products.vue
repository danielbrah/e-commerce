<script setup>
    import { ref, onMounted} from 'vue'

    const productData = ref()

    const getData = async function(){
        try{
            const res = await fetch(`https://fakestoreapi.com/products?limit=5`)
            if(!res.ok) throw new Error('Something went wrong with getting data.')

            const data = await res.json()
            productData.value = data
        } catch(err)
        {
            console.error(`Error: ${err.message}`)
        }
    }

onMounted(() => 
{
    getData()
})
</script>

<template>
    <div id="products">
        <h2 id="products__title">Products and stuff</h2>
        <div id="products__container">
            <div class="product" v-for="product in productData" :key="product.id">
                <img :src="product.image" alt="image">
                <h2>{{ product.title }}</h2>
                <button>View</button>
                <h3>${{ (product.price).toFixed(2) }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/layouts/products.scss';
</style>