<template>
  <div>
    <a href="#/">Table</a>
    &#09;
    <a href="#/converter">Converter</a>
    <hr>
    <router-view :values='table'></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  components: {  },
  data: () => ({
    table: [
      
    ],
  }),
  methods: {
    addToTable(element) {
      this.table.push(element);
    },
    api() {
      return axios.create({
        baseURL: 'https://api.nbp.pl/api/',
        timeout: 1000,
        headers: {Accept : 'application/json'}
      });
    }
  },
  mounted() {
    this.api().get('exchangerates/tables/a/')
      .then(response => response.data[0].rates.forEach(i => this.addToTable(i)));
  },
};
</script>

<style scoped>

</style>
