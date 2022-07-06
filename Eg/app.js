const app = Vue.createApp({
  // data, functions
//   template: `<h2>I am a template</h2>`,
  data(){
    return {
        show: true,
        title: 'Final House',
        author: 'Sam Jack',
        age: 45
    }
  },
  methods:{
    // changeTitle(title){
    //     // this.title = 'The Last Dog'
    //     this.title = title
    // }
  }
})

app.mount("#app");
