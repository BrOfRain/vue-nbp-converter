<template>
  <div id="Converter">
    <button v-on:click="reset">Reset</button>
    <br />
    <br />
    <v-select
      class="select"
      :options="table"
      label="currency"
      placeholder="wybierz walutę"
      v-model="fromCurrency"
    />
    <input class="input" type="number" min="0" step="1" v-model="fromValue" />
    {{ (fromCurrency ? `(${fromCurrency.code})` : "") }}
    ===>
    {{ (toValue >= 0 ? toValue.toFixed(3) : "") }}
    <v-select
      class="select"
      :options="table"
      label="currency"
      placeholder="wybierz walutę"
      v-model="toCurrency"
    />
    {{ (toCurrency ? `(${toCurrency.code})` : "") }}
  </div>
</template>

<script>
export default {
  name: "Converter",
  props: {
    table: { type: Array, required: true }
  },
  data: () => ({
    fromCurrency: undefined,
    fromValue: 0,
    toCurrency: undefined
  }),
  computed: {
    toValue: function() {
      if (!this.fromCurrency || !this.toCurrency) return;
      return (this.fromValue * this.fromCurrency.mid) / this.toCurrency.mid;
    }
  },
  methods: {
    reset() {
      this.fromCurrency = undefined;
      this.fromValue = 0;
      this.toCurrency = undefined;
    }
  }
};
</script>

<style scoped>
#Converter {
  font-size: 18px;
}
.select {
  display: inline-block;
  width: 300px;
}
.input {
  font-size: 18px;
}
</style>