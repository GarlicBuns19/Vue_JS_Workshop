<template>
  <product-list-one :products="products"></product-list-one>
  <product-list-two :products="products"></product-list-two>
</template>

<script>
import Product1 from './components/Product1.vue'
import Product2 from './components/Product2.vue'

export default {
  components: {
    'product-list-one': Product1,
    'product-list-two': Product2
  },
  data(){
    return {
      products: [
        {book:'Pots'},
        {book:'Food'},
        {book:'Bread'}
      ]
    }
  }
}
</script>

<style>

</style>
