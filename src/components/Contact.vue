<script setup>
import { onMounted, ref } from 'vue' 
import { router } from './routes';

const form = ref(null)

const handleSubmit = function(e) {
    const myForm = e.target
    const formData = new FormData(myForm)

    fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(formData).toString()
    }).then(() => {
        alert('Thank you for the submission!')
    }).catch(err => alert(`${err.message}`))
}

onMounted(() => {
    window.scroll(0, 0)
})
</script>

<template>
    <div id="contact">
        <div id="wrapper">
            <h1>Any Questions? Contact us.</h1>
            <form ref="form" name="contact" method="POST" @submit.prevent="handleSubmit">
                <input type="hidden" name="form-name" value="contact" />
                <label for="email">Email <span class="required">*</span></label>
                <input type="email" name="email" id="email" placeholder="yourname@example.com" size="45" autocomplete="on">

                <label for="subject">Subject <span class="required">*</span></label>
                <input type="text" name="subject" id="subject" placeholder="Subject">

                <label for="message">Message <span class="required">*</span></label>
                <textarea id="message" name="message" rows="12" cols="64" placeholder="Your message here..."></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/sass/pages/contact.scss';
</style>