const app = Vue.createApp({
    // Use template instead of typing in html
    template:`
        <div v-if='isVisable' id="box1">
            <h1>{{isVisable}}</h1>
        </div>
            <h1>{{name}} {{surname}}</h1>
            <input type="text" v-model="name">
        `
        // <button >Click Me</button>
    ,data(){
        // Must use return
        return {
        name: 'Ra\'ees',
        surname: 'Benny',
        name1: 'Jared',
        surname1: 'Isaacs',
        isVisable: true
        }
    }
})
app.mount('#app')