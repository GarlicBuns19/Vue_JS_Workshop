const app = Vue.createApp({
    // template: `<h1>Hello Vue ;)</h1>`
    data(){
        return {
            title: 'Beans',
            age: 45
        }
    }
})

app.mount('#app')