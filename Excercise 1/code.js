const app = Vue.createApp({
    // Use template instead of typing in html
    template:`
            <h1>{{name}} {{surname}}</h1>
            <input type="text" v-model="name">
            <button v-on:click= 'display'>Click Me</button>
            <div v-if= 'isVisable' id="box1">
                <h1>{{isVisable}}</h1>
            </div>
        `,
        // <button >Click Me</button>
    data(){
        // Must use return
        return {
        name: 'Ra\'ees',
        surname: 'Benny',
        name1: 'Jared',
        surname1: 'Isaacs',
        isVisable: true
        }
    },
    methods: {
        display(){
            // Make use of this
            this.isVisable = !this.isVisable;
        }
    }
})
app.mount('#app')