<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios)</p>
    </div>
    <component v-bind:is="currentView" v-bind:contact="contact"></component>
    <contactList v-bind:contactlist="contactlist"></contactList>
    <paginate ref="pagebuttons" v-bind:page-count="totalpage" v-bind:page-range="5" v-bind:margin-pages="2" v-bind:click-handler="pageChanged" v-bind:prev-text="'<'" v-bind:next-text="'>'" v-bind:container-class="'pagination'" v-bind:page-class="'page-item'"></paginate>
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
        this.fetchContacts();
        EventBus.$on("cancel", () => {
            this.currentView = null;
        });
        EventBus.$on("addSubmit", () => {
            this.currentView = null;
            this.addContact(contact);
        });
        EventBus.$on("updateSubmit", () => {
            this.currentView = null;
            this.updateContact(contact);
        });
        EventBus.$on("addContactForm", () => {
            this.currentView = "addContact";
        });
        EventBus.$on("editContactForm", (no) => {
            this.fetchContactOne(no);
            this.currentView = "updateContact";
        });
        EventBus.$on("deleteContact", (no) => {
            this.deleteContact(no);
        });
        EventBus.$on("editPhoto", (no) => {
            if (typeof file !== "undefined") {
                this.updatePhoto(no, file);
            }
            this.currentView = null;
        });
    },
    computed : {
        totalpage : function() {
            return Nath.floor((this.contactlist.totalcount - 1) / this.contactlist.pagesize) + 1;
        }
    },
    methods : {
        pageChanged : function(page) {
            this.contactlist.pageno = page;
            this.fetchContacts();
        },
        fetchContacts : function() {
            this.$axios.get(CONF.FETCH, {
                param : {
                    pageno : this.contactlist.pageno,
                    pagesize:this.contactlist.pagesize
                }
            }).then((response) => {
                this.contactlist = response.data;
            }).catch((ex) => {
                contsole.log("fetchContacts failed", ex);
                this.contactlist.contacts =[];
            })
        },
        addContact : function(contact) {
            this.$axios.post(CONF.ADD, contact).then((response) => {
                this.contactlist.pageno = 1;
                this.fetchContacts();
            }).catch((ex) => {
                console.log("addContact failed : ", ex);
            })
        },
        updateContact : function(contact) {
            this.$axios.put(CONF.UPDATE.replace("${no}", contact.no), contact).then((response) => {
                this.fetchContacts();
            })
        },
        fetchContactOne : function(no) {
            this.$axios.get(CONF.FETCH_ONE.replace("${no}", no)).then((response) => {
                this.contact = response.data;
            }).catch((ex) => {
                console.log("fetchContactOne failed", ex);
            })
        },
        deleteContact : function(no) {
            this.$axios.delete(CONF.DELETE.replace("${no}", no)).then((response) => {
                this.fetchContacts();
            })
        },
        updatePhoto : function(no, file) {
            var data = new FormData();
            data.append("photo", file);
            this.$axios.post(CONF.UPDATE_PHOTO.replace("${no}", no), data).then((response) => {
                this.fetchContacts();
            }).catch((ex) => {
                console.log("updatePhoto failed", ex);
            })
        }
    },
    watch : {
        ["contactlist.pageno"] : function() {
            this.$refs.pagebuttons.selected = this.contactlist.pageno - 1;
        }
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