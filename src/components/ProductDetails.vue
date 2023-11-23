<script setup>
    import { onMounted, onUnmounted, ref, watch} from 'vue'
    import { useCartStore } from '../store/cart'
    import { useDataStore } from '../store/data';

    // quantity
    const count = ref(0)

    // images preview
    const current = ref(1)

    // pinia
    const store = useCartStore()
    const productData = useDataStore()

    // props: dynamic routing
    const props = defineProps(['id'])

    // product data
    const product = ref(null)

    // condition that checks whether fetch is done
    const isLoading = ref(true)
    // const addItem = function() {
    //     store.cart.push(
    //     {title: 'Lorem Ipsum', 
    //     quantity: 5, 
    //     price: 150.00, },
    //     )
    // }

    const changeImage = function(e)
    {
        if(Number(e.target.dataset.tab) !== current.value) current.value = Number(e.target.dataset.tab)
    }

    onMounted(() => {
        window.scrollTo(0, 0)
        
        if(productData.data !== null)
        {
            product.value = productData.data[props.id - 1]
            isLoading.value = false
        }
        else{
            watch(() => productData.data, () => {
            if(productData.data)
            {

                isLoading.value = false
                product.value = productData.data[props.id - 1]
            }
        })
        }
    })

    onUnmounted(() => {
        product.value = null
    })

</script>

<template>
    <div id="product__details">
        <div id="product__details--preview__image">
            <img ref="imgSrc" :src="`/images/image-product-${current}.jpg`" alt="Image">

            <aside id="preview__image__selection">
                <div data-tab="1" :class="{'active' : current === 1}" @click="changeImage">test 1</div>
                <div data-tab="2" :class="{'active' : current === 2}" @click="changeImage">test 2</div>
                <div data-tab="3" :class="{'active' : current === 3}" @click="changeImage">test 3</div>
                <div data-tab="4" :class="{'active' : current === 4}" @click="changeImage">test 4</div>
            </aside>
        </div>

        <div id="product__details--info">
            <div id="product__details--info__desc">
                <h2>Some Blah Blah Company Name</h2>

                <h3 v-if="isLoading">Loading...</h3>
                <h3 v-else>{{ product.title }}</h3>

                <p v-if="isLoading">Loading...</p>
                <p v-else>{{ product.description }}</p>

                <div id="product__details--info__desc__price">
                    <!-- <h4>$125.00</h4> -->
                    <h4 v-if="isLoading">...</h4>
                    <h4 v-else>${{ (product.price).toFixed(2) }}</h4>

                    <h4>50%</h4>

                    <h4 v-if="isLoading">...</h4>
                    <h4 v-else>${{ (product.price / 2).toFixed(2) }}</h4>
                </div>

                <div id="product__details--info__desc__buttons">
                    <div>
                        <button @click="count ? count-- : count"><img src="./icons/icon-minus.svg" alt="Subtract total quantity by one"></button>
                        <p>{{ count }}</p>
                        <button @click="count++"><img src="./icons/icon-plus.svg" alt="Add total quantity by one"></button>
                    </div>
                    <button @click="addItem"><img src="../components/icons/icon-cart-light.svg" alt="">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/sass/pages/productDetails.scss';
</style>