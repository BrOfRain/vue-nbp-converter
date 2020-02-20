<template>
  <div>
    <h3>
      Autor:
      <b>RainFetch</b>
    </h3>
    <hr />
    <router-link to="/">Tabela</router-link>
    <br />
    <router-link to="/converter">Konwerter walut</router-link>
    <hr />
    <router-view :table="table"></router-view>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "app",
  components: {},
  data: () => ({
    table: [
      {
        currency: "złoty (Polska)",
        code: "PLN",
        mid: 1
      }
    ]
  }),
  methods: {
    addToTable(element) {
      this.table.push(element);
    },
    api() {
      return axios.create({
        baseURL: "https://api.nbp.pl/api/",
        timeout: 1000,
        headers: { Accept: "application/json" }
      });
    }
  },
  mounted() {
    this.api()
      .get("exchangerates/tables/a/")
      .then(response =>
        response.data[0].rates.forEach(i => this.addToTable(i))
      );
  }
};
</script>

<style scoped>
</style>
