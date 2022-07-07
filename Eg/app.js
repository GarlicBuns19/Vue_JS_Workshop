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
    mouseOver(o){
      console.log('U over me')
      // Info about mouseover 
      console.log(o)
      console.log(o , o.type)
    },
    mouseLeave(l){
      console.log('U leaving me')
      console.log(l)
      console.log(l , l.type)
    },
    doubleClick(dc){
      console.log('U doubled me')
      console.log(dc)
      console.log(dc , dc.type)
    }
  }
})

app.mount("#app");
