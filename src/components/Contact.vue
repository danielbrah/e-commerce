<script setup>
import { onMounted, ref } from 'vue' 

const form = ref(null)


onMounted(() => {
    window.scroll(0, 0)
})
</script>

<template>
    <div id="contact">
        <div id="wrapper">
            <h1>Any Questions? Contact us.</h1>
            <form ref="form" name="contact" method="POST">
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