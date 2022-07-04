const app = Vue.createApp({
    // Use template instead of typing in html
    // template:`
    //         <h1>{{name}} {{surname}}</h1>
    //         <input type="text" v-model="name">
    //         <button v-on:click= 'display'>Click Me</button>
    //         <div v-if= 'isVisable' id="box1">
    //             <h1>{{isVisable}}</h1>
    //         </div>
    //     `,
        // <button >Click Me</button>
    data(){
        // Must use return
        return {
        name: 'Ra\'ees',
        surname: 'Benny',
        name1: 'Jared',
        surname1: 'Isaacs',
        isVisable: true,
        thing: ' ',
        age: '',
        w: 'Lets Go',
        q: 'You are not old enough'
        }
    },
    // methods: {
    //     display(){
    //         // Make use of this
    //         this.isVisable = !this.isVisable;
    //     }
    // },
    template:`
    Name<input type="text" v-model="thing">
    Age<input type="number" v-model="age" id="age">
        <h1>{{thing}}</h1>
        <div id="box1">
        <h2> {{age}}</h2>
        </div>
        <div id='output'>

        </div>
        <button v-on:click= 'ageDisplay'>Check</button>
        `,
        methods: {
            ageDisplay(){
                // Make use of this
            if(age.value > 17){
                document.getElementById('output').innerHTML = `<h2>${this.w}</h2>`
                console.log(this.w)
            }else{
                document.getElementById('output').innerHTML = `<h2>${this.q}</h2>`
                console.log(this.q)
            }
            }
        },
})
app.mount('#app')