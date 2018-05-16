<style>
    * {
        box-sizing:border-box;
    }
    .header {
        background-color:#800080;
        padding:30px;
        color:#ffff00;
        text-align:center;    
    }
    .header:after {
        content:"";
        display:table;
        clear:both;
    }
</style>

<template>
    <div id="todolistapp">
        <div id="header" class="header">
            <h2>Todo List App</h2>
            <input-todo></input-todo>
        </div>
        <list></list>
    </div>
</template>

<script>
    import InputTodo from "./InputTodo.vue";
    import List from "./List.vue";
    
    export default {
        name : "todo-list",
        components : {InputTodo, List}
    }
</script>