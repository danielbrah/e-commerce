<script setup>
    import { onMounted, ref} from 'vue'

    const count = ref(0)

    let current = ref(1)

    const carousel = function(e)
    {
        if(Number(e.target.dataset.tab) !== current.value) current.value = Number(e.target.dataset.tab)
    }
</script>

<template>
    <div id="product__details">
        <div id="product__details--preview__image">
            <img ref="imgSrc" :src="`/images/image-product-${current}.jpg`" alt="Image">

            <aside id="preview__image__selection">
                <div data-tab="1" :class="{'active' : current === 1}" @click="carousel">test 1</div>
                <div data-tab="2" :class="{'active' : current === 2}" @click="carousel">test 2</div>
                <div data-tab="3" :class="{'active' : current === 3}" @click="carousel">test 3</div>
                <div data-tab="4" :class="{'active' : current === 4}" @click="carousel">test 4</div>
            </aside>
        </div>

        <div id="product__details--info">
            <div id="product__details--info__desc">
                <h2>Sneaker Company</h2>

                <h3>Fall Limited Edition Sneakers</h3>

                <p>These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything
                    the weather can offer.
                </p>

                <div id="product__details--info__desc__price">
                    <h4>$125.00</h4>
                    <h4>50%</h4>
                    <h4>$250.00</h4>
                </div>

                <div id="product__details--info__desc__buttons">
                    <div>
                        <button @click="count ? count-- : count"><img src="./icons/icon-minus.svg" alt="Subtract total quantity by one"></button>
                        <p>{{ count }}</p>
                        <button @click="count++"><img src="./icons/icon-plus.svg" alt="Add total quantity by one"></button>
                    </div>
                    <button><img src="../components/icons/icon-cart-light.svg" alt="">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/pages/productDetails.scss';
</style>