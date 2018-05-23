<template>
    <contactForm mode="update" v-bind:contact="contact" />
</template>

<script>
    import contactForm from "./contactForm.vue";

    export default {
        name : "updateContact",
        components : {contactForm},
        props : ["contact"]
    }
</script>