<style>
    * {
        box-sizing:border-box;
    }
    ul {
        margin:0;
        padding:0;
    }
    ul li {
        cursor:pointer;
        position:relative;
        padding:8px 8px 8px 40px;
        background:#eee;
        font-size:14px;
        transition:0.2s;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    ul li:hover {
        background:#ddd;
    }
    ul li.checked {
        background:#bbb;
        color:#fff;
        text-decoration:line-through;
    }
    ul li.checked:before {
        content:"";
        position:absolute;
        border-color:#fff;
        border-style:solid;
        border-width:0 1px 1px 0;
        top:10px;
        left:16px;
        transform:rotate(45deg);
        height:8px;
        width:8px;
    }
    .close {
        position:absolute;
        right:0;
        top:0;
        padding:8px 12px 8px 12px;
    }
    .close:hover {
        background-color:#f44336;
        color:#fff;
    }
</style>

<template>
    <ul id="todoList">
        <!--<li v-for="(a, index) in todolist" v-bind:class="checked(a.done)" v-on:click="doneToggle(index)">-->
        <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)" v-on:click="doneToggle({index:index})">
            <span>{{a.todo}}</span>
            <span v-if="a.done">(완료)</span>
            <!--<span class="close" v-on:click.stop="deleteTodo(index)">&#x00D7;</span>-->
            <span class="close" v-on:click.stop="deleteTodo({index:index})">&#x00D7;</span>
        </li>
    </ul>
</template>

<script>
    import Constant from "../constant"
    import {mapState, mapMutations} from "vuex"
    import _ from "lodash";

    export default {    
        /*computed : mapState(["todolist"]),*/
        /* 계산형 속성명 */
        computed : mapState({
            todolist : (state) => state.todolist
        }),
        methods : _.extend({
                checked(done) {
                    if(done) {
                        return {checked : true};
                    } else {
                        return {checked : false};
                    }
                }
            },
            /*
            mapMutations([
                Constant.DELETE_TODO,
                Constant.DONE_TOGGLE
            ])
            */
            mapMutations({
                deleteTodo : Constant.DELETE_TODO,
                doneToggle : Constant.DONE_TOGGLE
            })
        )
    }

    /*
    import Constant from "../constant";

    export default {    
        computed : {
            todolist() {
                return this.$store.state.todolist;
            }
        },
        methods : {
            checked : function(done) {
                if(done) {
                    return {checked : true};
                } else {
                    return {checked : false};
                }
            },
            deleteTodo : function(index) {
                this.$store.commit(Constant.DELETE_TODO, {index : index});
            },
            doneToggle : function(index) {
                this.$store.commit(Constant.DONE_TOGGLE, {index : index});
            }
        }
    }

    import eventBus from "./EventBus.vue";

    export default {
        created : function() {
            eventBus.$on("add-todo", this.addTodo);
        },
        data  : function() {
            return {
                todolist : [
                    { todo : "영화보기", done : false },
                    { todo : "주말산책", done : true },
                    { todo : "ES6학습", done : false },
                    { todo : "잠실야구장", done : false },
                ]
            }
        },
        methods : {
            checked : function(done) {
                if (done) {
                    return {checked : true};
                } else {
                    return {checked :false};
                }
            },
            addTodo : function(todo) {
                if (todo !== "") {
                    this.todolist.push({todo : todo, done : false});
                }
            },
            doneToggle : function(index) {
                this.todolist[index].done = !this.todolist[index].done;
            },
            deleteTodo : function(index) {
                this.todolist.splice(index, 1);
            }
        }
    }
    */
</script>