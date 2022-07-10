<template>
<h1>First Vue</h1>
<h1>{{ subtitle }}</h1>
<input type="text" name="" ref="name">
<button @click="handelClick">Click Me</button>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div v-show='modalShow'>
    <Modal :header="header" subtitle="Subtitle" theme="sale">
      <h1>Slot here</h1>
    </Modal>
  </div>
  <button @click='openModal'>
    <span v-if='!modalShow'>open Modal</span>
    <span v-if='modalShow'>close Modal</span>
  </button>
  <Test/>
</template>

<script>  
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'
import Test from './components/Test.vue';

export default {
  name: 'App',
   data() {
      return {
        subtitle: "Lets go",
        header:'I am a header',
        modalShow: false
      };
   },
   methods:{
    handelClick(){
      console.log(this.$refs.name)
      this.$refs.name.focus( )
      this.$refs.name.setAttribute('id','input-ref')
      this.$refs.name.classList.add('input-refffff')
    },
    openModal(){
      this.modalShow = !this.modalShow
    }
   },
   components: {
    name: 'Modal', 
    Modal,
    name:'Test',
    Test,
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
