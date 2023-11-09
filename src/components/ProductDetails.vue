<script setup>
    import { onMounted, ref} from 'vue'

    const count = ref(0)
</script>

<template>
    <div id="product__details">
        <div id="product__details--preview__image">
            <img src="../assets/images/image-product-1.jpg" alt="Image">

            <aside id="preview__image__selection">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/pages/productDetails.scss';
</style>