import Vue from "vue";
import Vuex from "vuex";
import Constant from "../constant";

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        todolist : [
            {todo : "영화보기", done : false},
            {todo : "주말산책", done : true},
            {todo : "ES6학습", done : false},
            {todo : "잠실야구장", done : false}
        ]
    },
    mutations : {
        [Constant.ADD_TODO] : (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({todo : payload.todo, done : false});
            }
        },
        [Constant.DONE_TOGGLE] : (state, payload) => {
            state.todolist[payload.index].done = !state.todolist[payload.index].done;
        },
        [Constant.DELETE_TODO] : (state, payload) => {
            state.todolist.splice(payload.index, 1);
        }
    },
    actions : {
        [Constant.ADD_TODO] : ({state, commit}, payload) => {
            console.log("### addTodo!!");
            commit(Constant.ADD_TODO, payload);
        },
        [Constant.DONE_TOGGLE] : ({state, commit}, payload) => {
            console.log("### deleteTodo!!");
            commit(Constant.DONE_TOGGLE, payload);
        },
        [Constant.DELETE_TODO] : ({state, commit}, payload) => {
            console.log("### doneToggle!!");
            commit(Constant.DELETE_TODO, payload);
        }
    }
});

export default store;