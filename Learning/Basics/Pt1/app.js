const app = Vue.createApp({
    // template: `<h1>Hello Vue ;)</h1>`
    data(){
        return {
            show: true,
            title: 'Beans',
            age: 45,
            mOver: 'u on me',
            mLeave: 'u left me',
            double: 'x2',
            x: 0,
            y: 0,
            books: [
                {title: 'hello'},
                {title: 'Cook'},
                {title: 'pop'}
            ]
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Eat bread'
        },
        showItems(){
            console.log('helo')
            this.show = !this.show
        },
        mouseOver(){
            console.log(this.mOver)
        },
        mouseLeave(){
            console.log(this.mLeave)
        },
        mousePosition(e){
            this.x = e.offsetX
            this.y = e.offsetX
        },
        mouseDouble(){
            console.log(this.double)
        }
    }
})

app.mount('#app')