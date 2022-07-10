<template>
    <h1>Test</h1>
    <p>{{this.$store.state.count}}</p>
    <button @click="increment">dadawwawdaa</button>
</template>

<script>
export default {
    methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
  }
}
</script>