import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
    const data = ref(null)

    function setData(data){
        data.value = data
    }

    return { data }
})