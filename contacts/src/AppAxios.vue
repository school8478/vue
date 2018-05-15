<template>
    <div id="app">
        <div class="container">
            <div class="form-group">
                <button v-on:click="fetchContacts">1페이지 연락처 조회</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="name" placeholder="이름을 입력합니다." />
                <input type="text" v-model="tel" placeholder="전화번호를 입력합니다." />
                <input type="text" v-model="address" placeholder="주소를 입력합니다." />
                <button v-on:click="addContact">연락처 1건 추가</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <button v-on:click="fetchContactOne">연락처 1건 조회</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <input type="text" v-model="name" placeholder="이름을 입력합니다." />
                <input type="text" v-model="tel" placeholder="전화번호를 입력합니다." />
                <input type="text" v-model="address" placeholder="주소를 입력합니다." />
                <button v-on:click="updateContact">수정</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <button v-on:click="deleteContact">삭제</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <input type="file" ref="photofile" name="photo" />
                <button v-on:click="changePhoto">파일 변경</button>
            </div>
        </div>
        <span>JSON 출력</span>
        <div id="result" class="container">
            <xmp>{{result}}</xmp>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name : "app",
        data() {
            return {
                no : 0,
                name : "",
                tel : "",
                address : "",
                result : null
            }
        },
        methods : {
            fetchContacts : function() {
                axios({
                    method : "GET",
                    url : "/api/contacts",
                    params : {
                        pageno : 1,
                        pagesize: 5
                    }
                }).then((response) => {
                    console.log(response);
                    this.result = response.data;
                }).catch((ex) => {
                    console.log("ERROP!!!! : ", ex);
                })
            },
            addContact : function() {

            },
            fetchContactOne : function() {

            },
            updateContact : function() {

            },
            deleteContact : function() {

            },
            changePhoto : function() {

            }
        }
    }
</script>

<style>
    @import url(http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css);
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        text-align:center;
        color:#2c3e50;
        margin-top:60px;
    }
    .container {
        border:solid 1px #808080;
        padding:10px;
        margin-bottom:10px;
        text-align:left;
    }
    #result {
        text-align:left;
        padding:20px;
        border:solid 1px #000;
    }
    .form-group {
        border:dashde 1p #808080;
        padding:5px 5px 5px 20px;
    }
</style>