<template>
    <div class="main test">
        {{msg}}
        <Child11 />
        {{msg}}
    </div>
</template>

<script>
    import Child11 from "./Child11.vue";

    export default {
        name : "child1",
        components : {Child11},
        data () {
            return {
                msg : "child1"
            }
        }
    };
</script>

<style scoped>
    .main {
        border:solid 1px #000;
        background-color:#ffff00;
    }
    .test {
        padding:10px;
        text-decoration:underline;
        border:solid 1px #000;
    }
</style>