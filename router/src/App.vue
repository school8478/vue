<template>
  <div>
    <div class="header">
      <h1 class="headerText">(주)OpenSG</h1>
      <nav>
        <ul>
          <li><router-link v-bind:to="{name : 'home'}">Home</router-link></li>
          <li><router-link v-bind:to="{name : 'about'}">About</router-link></li>
          <li><router-link v-bind:to="{name : 'contacts'}">Contacts</router-link></li>
        </ul>
      </nav>
    </div>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import home from "./components/home.vue";
  import about from "./components/about.vue";
  import contacts from "./components/contacts.vue";
  import contactByNo from "./components/contactByNo.vue";
  import notFound from "./components/notFound";
  import vueRouter from "vue-router";
  
  function connectQueryToProp(route) {
    return {no : route.query.no, path : route.path};
  }

  const router = new vueRouter({
    mode : "history",
    routes : [
      {path : "/", component : home},
      {path : "/home", name : "home", component : home},
      {path : "/about", name : "about", component : about},
      {
        path : "/contacts", name : "contacts", component : contacts,
        children : [
          {
            path : ":no", name : "contactbyno", component : contactByNo, props : true,
            beforeEnter : (to, from, next) => {
              console.log("@@ beforeEnter! : " + from.path + "-->" + to.path);
              if (from.path.startsWith("/contacts")) {
                next();
              } else {
                next("/home");
              }
            }
          }
        ]
      },
      {path : "/contactbyno", component : contactByNo, props : connectQueryToProp},
      {path : "*", component : notFound}
    ]
  });

  export default {
    name : "app",
    router
  }
</script>

<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
 
.header {
  background-color:#00ffff;
  padding:10px 0 0;
}
.headerText {
  padding:0 20px;    
}
ul {
  list-style-type:none;
  margin:0;
  padding:0;
  overflow:hidden;
  background-color:#800080;
}
li {
  float:left;
}
li a {
  display:block;
  color:#ffff00;
  text-align:center;
  padding:14px 16px;
  text-decoration:none;
}
li a:hover {
  background-color:#00ffff;
  color:#000;
}
</style>