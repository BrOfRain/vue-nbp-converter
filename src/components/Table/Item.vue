<template>
  <tr :key="item.code">
    <td>{{item.currency}}</td>
    <td>{{item.code}}</td>
    <td>{{item.mid}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  }
};
</script>

<style scoped>
</style>
