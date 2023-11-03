<script setup>
import { onMounted, ref} from 'vue'

const email = ref()
const subject = ref()
const message = ref()


const handleSubmit = function() {
    email.value = ''
    subject.value = ''
    message.value = ''
}

onMounted(() => {
    window.scroll(0, 0)
})
</script>

<template>
    <div id="contact">
        <div id="wrapper">
            <h1>Any Questions? Contact us.</h1>
            <form ref="form" name="contact" @submit.prevent="handleSubmit">
                <label for="email">Email <span class="required">*</span></label>
                <input type="email" v-model="email" name="email" id="email" placeholder="yourname@example.com" size="45" autocomplete="on" required>

                <label for="subject">Subject <span class="required">*</span></label>
                <input type="text" v-model="subject" name="subject" id="subject" placeholder="Subject" required>

                <label for="message">Message <span class="required">*</span></label>
                <textarea id="message" v-model="message" name="message" rows="12" cols="64" placeholder="Your message here..." required></textarea>

                <button ref="submitBtn" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/sass/pages/contact.scss';
</style>