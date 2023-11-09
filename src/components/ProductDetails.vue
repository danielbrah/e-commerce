<script setup>
    import { onMounted, ref} from 'vue'
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
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/pages/productDetails.scss';
</style>