<template>
  <div id="app">
    <region-buttons></region-buttons>
    <country-list></country-list>
  </div>
</template>

<script>
import regionButtons from './components/regionButtons.vue';
import countryList from './components/countryList.vue';

export default {
  name: 'app',
  components : {regionButtons, countryList}
}
</script>

<style>
</style>
