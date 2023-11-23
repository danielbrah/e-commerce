<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'
import { useDataStore } from './store/data'

const dataStore = useDataStore()

const getData = async function(){
        try{
            const res = await fetch(`https://fakestoreapi.com/products?limit=8`)
            if(!res.ok) throw new Error('Something went wrong with getting data.')

            const data = await res.json()
            console.log(data)
            dataStore.data = data
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
    <Nav/>
    <router-view></router-view>
    <Footer/> <!-- footer -->
</template>