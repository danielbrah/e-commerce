import { defineStore } from 'pinia'

export default useCartStore = defineStore('cart', {
    state: () => ({
        cart: []
    }), 

    actions: {
        addToCart(item){
            this.cart.push(item)
        }
    }
})