import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useMenuStore = defineStore('cartMenu', () => {
    const isOpened = ref(false)

    function toggleMenu(){
        isOpened.value = !isOpened.value
    }

    return { isOpened, toggleMenu }
})