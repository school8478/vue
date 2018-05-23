import vue from 'vue';
import app from './App';
import store from './store';
import vueRouter from 'vue-router';

import home from './components/home';
import about from './components/about';
import contactList from './components/contactList';
import contactForm from './components/contactForm';
import updatePhoto from './components/updatePhoto';

vue.use(vueRouter);
vue.config.productionTip = false;

const router = new vueRouter({
  mode : 'history',
  routes : [
    {path : '/', redirect : '/home'},
    {path : '/home', name : 'home', component : home},
    {path : '/about', name : 'about', component : about},
    {
      path : '/contacts', name : 'contacts', component : contactList,
      children : [
        {path : 'add', name : 'addContact', component : contactForm},
        {path : 'update/:no', name : 'updateContact', component : contactForm, props : true},
        {path : 'photo/:no', name : 'updatePhoto', component : updatePhoto, props : true},
      ]
    }
  ]
})

new vue({
  store,
  router,
  el : '#app',
  template : '<app />',
  components : { app }
})
