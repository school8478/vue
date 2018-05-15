<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios)</p>
    </div>
    <component v-bind:is="currentView" v-bind:contact="contact"></component>
    <contactList v-bind:contactlist="contactlist"></contactList>
    <paginate ref="pagebuttons" v-bind:page-count="totalpage" v-bind:page-range="10" v-bind:margin-pages="2" v-bind:click-handler="pageChanged" v-bind:prev-text="'<'" v-bind:next-text="'>'" v-bind:container-class="'pagination'" v-bind:page-class="'page-item'"></paginate>
  </div>
</template>

<script>
import Vue from 'vue';

import ContactList from './components/contactList';
import AddContact from './components/addContact';
import UpdateContact from './components/updateContact';
import UpdatePhoto from './components/updatePhoto';

import CONF from './config.js';
import EventBus from './eventBus.js';
import Paginate from 'vuejs-paginate';

export default {
  name : 'app',
  components : {
    ContactList,
    AddContact,
    UpdateContact,
    UpdatePhoto,
    Paginate
  },
  data : function() {
    return {
      currentView : null,
      contact : {
        no : 0,
        name : '',
        tel : '',
        address : '',
        photo : ''
      },
      contactlist : {
        pageno : 1,
        pagesize : CONF.PAGESIZE,
        tatalcount : 0,
        contacts : []
      }
    }
  },
  mounted : function() {

  },
  computed : {

  },
  methods : {

  },
  watch : {

  }
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