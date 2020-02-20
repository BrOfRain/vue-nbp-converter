<template>
  <table>
    <thead>
      <tr>
        <th>Nazwa waluty</th>
        <th>Kod ISO</th>
        <th>Kurs</th>
      </tr>
    </thead>
    <tbody>
      <Item v-for="item in table" :key="item.code" :item="item" />
    </tbody>
  </table>
</template>

<script>
import Item from "@/components/Table/Item";

export default {
  components: { Item },
  props: {
    table: { type: Array, required: true }
  }
};
</script>

<style scoped>
</style>
