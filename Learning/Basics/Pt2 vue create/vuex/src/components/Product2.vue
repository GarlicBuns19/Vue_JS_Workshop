<template>
  <h1>Product 2</h1>
  <ul>
    <li v-for="product in products" :key="{products: product.book}">
      {{ product.book }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {};
  },
};
</script>

<style></style>
