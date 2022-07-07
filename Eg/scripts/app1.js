const app = Vue.createApp({
  data() {
    return {
      show: true,
      books: [
        { title: "The Big Fan", author: "Hank", age: 33 },
        { title: "The Cook Pan", author: "Junk", age: 38 },
        { title: "The Pot Dot", author: "Hanny", age: 10 },
      ],
    };
  },
  methods: {
    showBooks() {
        this.show = !this.show  
    },
  },
});
app.mount("#app");
