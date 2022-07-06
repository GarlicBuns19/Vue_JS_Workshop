const app = Vue.createApp({
  // data, functions
//   template: `<h2>I am a template</h2>`,
  data(){
    return {
        title: 'Final House',
        author: 'Sam Jack',
        age: 45
    }
  }
});

app.mount("#app");
