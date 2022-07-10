<template>
<h1>First Vue</h1>
<h1>{{ subtitle }}</h1>
<input type="text" name="" ref="name">
<button @click="handelClick">Click Me</button>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>  
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
   data() {
      return {
        subtitle: "Lets go",
      };
   },
   methods:{
    handelClick(){
      console.log(this.$refs.name)
      this.$refs.name.focus( )
      this.$refs.name.setAttribute('id','input-ref')
      this.$refs.name.classList.add('input-refffff')
    }
   }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
