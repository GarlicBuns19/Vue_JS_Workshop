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
    toggleShow(){
        // this.show = false
        this.show = !this.show
    },
    mouseOver(e){
      console.log('U over me')
      // Info about mouseover 
      console.log(e)
    },
    mouseLeave(){
      console.log('U leaving me')
    },
    doubleClick(){
      console.log('U doubled me')
    }
  }
})

app.mount("#app");
