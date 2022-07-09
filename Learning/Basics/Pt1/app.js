const app = Vue.createApp({
    // template: `<h1>Hello Vue ;)</h1>`
    data(){
        return {
            show: true,
            title: 'Beans',
            age: 45
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Eat bread'
        },
        showItems(){
            console.log('helo')
            this.show = !this.show
        }
    }
})

app.mount('#app')