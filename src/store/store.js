import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cart = ref([])

    function addItemToCart(item){
        cart.value.push(item)
    }

    function $reset(){
        cart.value = []
    }

    return { cart, addItemToCart, $reset }
})