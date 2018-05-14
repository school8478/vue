<template>
    <div class="main">{{msg}}</div>
</template>

<script>
    export default {
        name : "child2",
        data () {
            return {
                msg : "child2"
            }
        }
    };
</script>

<style scoped>
    .main {
        border:solid 1px #000;
        background-color:#00ffff;
    }
</style>