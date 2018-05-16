// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './AppAxios'
import App from './App'
import axios from 'axios';
require('es6-promise').polyfill();

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#App',
  components: { App },
  template: '<App/>',
  components: {App}
})
