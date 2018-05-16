<template>
    <contactForm mode="update" v-bind:contact="contact" />
</template>

<script>
    import ContactForm from "./contactForm.vue";

    export default {
        name : "updateContact",
        components : {ContactForm},
        props : ["contact"]
    }
</script>