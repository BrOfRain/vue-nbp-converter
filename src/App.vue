<template>
  <div>
    <Button>clicker</Button>
    <Table :values='table'/>
  </div>
</template>

<script>
import axios from 'axios';
import Button from '@/components/Common/Button';
import Table from '@/components/Table/Table';

export default {
  name: 'app',
  components: { Table, Button },
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
