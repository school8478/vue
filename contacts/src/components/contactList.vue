<template>
    <div>
        <p class="addnew">
            <!--<button class="btn btn-primary" v-on:click="addContact()">새로운 연락처 추가하기</button>-->
            <router-link class="btn btn-primary" v-bind:to="{name : 'addContact'}">새로운 연락처 추가하기</router-link>
        </p>
        <div id="example">
            <table id="list" class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>전화번호</th>
                        <th>주소</th>
                        <th>사진</th>
                        <th>편집/삭제</th>
                    </tr>
                </thead>
                <tbody id="contacts">
                    <tr v-for="contact in contactlist.contacts">
                        <td>{{contact.name}}</td>
                        <td>{{contact.tel}}</td>
                        <td>{{contact.address}}</td>
                        <td><img class="thumbnail" v-bind:src="contact.photo" v-on:click="editPhoto(contact.no)" /></td>
                        <td>
                            <button class="btn bt-primary" v-on:click="editContact(contact.no)">편집</button>
                            <button class="btn bt-primary" v-on:click="deleteContact(contact.no)">삭제</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <paginate ref="pagebuttons" v-bind:page-count="totalpage" v-bind:page-range="5" v-bind:margin-pages="0" v-bind:click-handler="pageChanged" v-bind:prev-text="'<'" v-bind:next-text="'>'" v-bind:container-class="'pagination'" v-bind:page-class="'page-item'"></paginate>
        <router-view></router-view>
    </div>
</template>

<script>
    import constant from "../constant";
    import { mapState } from "vuex";
    import paginate from "vuejs-paginate";
    import _ from "lodash";

    export default {
        name : "contactList",
        components : {paginate},
        computed : _.extend(
            {
                totalpage : function() {
                    var totalcount = this.contactlist.totalcount;
                    var pagesize = this.contactlist.pagesize;
                    return Math.floor((totalcount - 1) / pagesize) + 1;
                }
            },
            mapState(["contactlist"])
        ),
        mounted : function() {
            var page = 1;

            if (this.$route.query && this.$route.query.page) {
                page = parseInt(this.$route.query.page);
            }
            this.$store.dispatch(constant.FETCH_CONTACTS, {pageno : page}); 
            this.$refs.pagebuttons.selected = page - 1;
        },
        watch : {
            "$route" : function(to, from) {
                if (to.query.page && to.query.page != this.contactlist.pageno) {
                    var page = to.query.page;
                    this.$store.dispatch(constant.FETCH_CONTACTS, {pageno : page}); 
                    this.$refs.pagebuttons.selected = page - 1;
                }
            }
            /*
            ,
            beforeRouteUpdate(to, from, next) {
                if (to.query.page && to.query.page != this.contactlist.pageno) {
                    var page = to.query.page;
                    this.$store.dispatch(constant.FETCH_CONTACTS, {pageno : page}); 
                    this.$refs.pagebuttons.selected = page - 1;
                    next();
                }
            }
            */
        },
        methods : {
            /*
            addContact : function() {
                this.$store.dispatch(constant.ADD_CONTACT_FORM);
            },
            */
            pageChanged : function(page) {
                this.$router.push({name : "contacts", query : {page : page}});
            },
            editContact : function(no) {
                //this.$store.dispatch(constant.EDIT_CONTACT_FORM, {no : no});
                this.$router.push({name : "updateContact", params : {no : no}});
            },
            deleteContact : function(no) {
                if (confirm("정말로 삭제하시겠습니까?") == true) {
                    this.$store.dispatch(constant.DELETE_CONTACT, {no : no});
                    this.$router.push({name : "contacts"});
                }
            },
            editPhoto : function(no) {
                //this.$store.dispatch(constant.EDIT_PHOTO_FORM, {no : no});
                this.$router.push({name : "updatePhoto", params : {no : no}});
            }
        }
    }
</script>

<style scoped>
    .addnew {
        margin:10px auto;
        max-width:820px;
        min-width:820px;
        padding:40px 0 0;
        text-align:left;
    }
    #example {
        margin:10px auto;
        max-width:820px;
        min-width:820px;
        padding:0;
        position:relative;
        font:13px "verdana";
    }
    #example .long {
        width:100%;
    }
    #example .short {
        width:50%;
    }
    #example input,
    textarea,
    select, {
        box-sizing:border-box;
        border:1px solid #bebebe;
        padding:7px;
        margin:0;
        outline:none;        
    }
    #list {
        width:800px;
        font:13px "verdana";
    }
    #list thead tr {
        color:#ffff00;
        background-color:#800080;
    }
    #list th:nth-child(5n+1),
    #list td:nth-child(5n+1) {
        width:200px;
    }
    #list th:nth-child(5n+2),
    #list td:nth-child(5n+2) {
        width:150px;
    }
    #list th:nth-child(5n+3),
    #list td:nth-child(5n+3) {
        width:250px;
    }
    #list th:nth-child(5n+4),
    #list td:nth-child(5n+4) {
        width:60px;
    }
    #list th:nth-child(5n),
    #list td:nth-child(5n) {
        width:150px;
    }
    #list tr {
        border-bottom:solid 1px #000;
    }
    #list th {
        padding:10px 5px;
    }
    #list td,
    #list th {
        text-align:center;
        vertical-align:middle;
    }
    img.thumbnail {
        width:48px;
        height:48px;
        margin:auto;
        display:block;
        cursor:pointer;
    }
</style>