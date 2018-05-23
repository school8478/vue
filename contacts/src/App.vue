<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + eventBus + Axios)</p>
      <div class="btn-group">
          <router-link to="/home" class="btn btn-info menu">Home</router-link>
          <router-link to="/about" class="btn btn-info menu">About</router-link>
          <router-link to="/contacts" class="btn btn-info menu">Contacts</router-link>
      </div>
    </div>
    <router-view></router-view>
    <!--
    <component v-bind:is="currentView"></component>
    <contactList></contactList>
    <paginate ref="pagebuttons" v-bind:page-count="totalpage" v-bind:page-range="5" v-bind:margin-pages="0" v-bind:click-handler="pageChanged" v-bind:prev-text="'<'" v-bind:next-text="'>'" v-bind:container-class="'pagination'" v-bind:page-class="'page-item'"></paginate>
    -->
  </div>
</template>

<script>
//import contactList from './components/contactList';
//import contactForm from './components/contactForm';
//import updatePhoto from './components/updatePhoto';

//import CONF from './config.js';
//import constant from './constant';
//import paginate from 'vuejs-paginate';
//import _ from 'lodash';
//import { mapState } from 'vuex';

export default {
    name : 'app'
    /*
    ,
    components : { contactList, contactForm, updatePhoto, paginate },
    computed : _.extend({
            totalpage : function() {
                var totalcount = this.contactlist.totalcount;
                var pagesize = this.contactlist.pagesize;
                return Math.floor((totalcount - 1) / pagesize) + 1;
            }
        },
        mapState([ "contactlist", "currentView" ])
    ),
    watch : {
        "contactlist.pageno" : function(page) {
            this.$refs.pagebuttons.selected = page - 1;
        }
    },
    mounted : function() {
        this.$store.dispatch(constant.FETCH_CONTACTS);
    },
    methods : {
        pageChanged : function(page) {
            this.$store.dispatch(constant.FETCH_CONTACTS, {pageno : page})
        }
    }
    */
}
</script>

<style>
@import url(https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css);

#container {
  font-family:"Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-align:center;
  color:#2c3e50;
  margin-top:60px;
}
</style>