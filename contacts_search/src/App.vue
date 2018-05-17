<template>
  <div>
    <search placeholder="두글자 이상 입력후 엔터!!"></search>
    <contact-list></contact-list>    
  </div>
</template>

<script>
import ContactList from "./components/contactList.vue";
import Search from "./components/search.vue";

export default {
  name : "app",
  components : {Search, ContactList}
}
</script>

<style>

</style>
