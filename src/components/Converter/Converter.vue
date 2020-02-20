<template>
  <form @submit.prevent="" @change="convert()">
    <select v-model="fromCurrency">
      <option v-for="item in table" :key="item.code" :value="item.code">{{item.currency}}</option>
    </select>
    <input type="number" v-model="fromValue"/>
    ===>
    <select v-model="toCurrency">
      <option v-for="item in table" :key="item.code" :value="item.code">{{item.currency}}</option>
    </select>
    <hr/>
    <h3><strong>{{fromValue}}</strong> {{fromCurrency}} => <strong>{{toValue.toFixed(4)}}</strong> {{toCurrency}}</h3> 
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    table: [
      
    ],
    fromCurrency: '',
    fromValue: 0,
    toCurrency: '',
    toValue: 0,
  }),
  methods: {
    api() {
      return axios.create({
        baseURL: 'http://api.nbp.pl/api/',
        headers: { Accept: 'application/json' }
      });
    },
    addToTable(element) {
      this.table.push(element);
    },
    convert() {
      this.toValue = this.fromValue * this.getMid(this.fromCurrency) / this.getMid(this.toCurrency);
    },
    getMid(v) {
      return (this.table.filter(({code}) => code === v)[0] || {mid: 0}).mid;
    }
  },
  mounted() {
    this.api().get('exchangerates/tables/a/')
      .then(res => res.data[0].rates.forEach(i => this.addToTable(i)));
  },
};
</script>