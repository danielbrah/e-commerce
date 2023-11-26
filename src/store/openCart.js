import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useMenuStore = defineStore('cartMenu', () => {
    const isOpened = ref(false)

    const openCart = () => isOpened.value = true

    const closeCart = () => isOpened.value = false

    return { isOpened }
})