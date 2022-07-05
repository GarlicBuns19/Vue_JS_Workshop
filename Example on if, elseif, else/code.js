const app = Vue.createApp({
    template: `
       
        <input type="text" @keyup="checkKey">
        <div>
        <label id="output"><span id="span"></span>{{keyboard}}</label>
        </div>
    `,
    data: function() {
        return {
            isVisible1: true,
            isVisible2: true,
            isVisible3: true,
            keyboard: '',
            U: 'You pressed'
        }
    },
    methods: {
        checkKey(key){
            this.keyboard = key.target.value
            // let Help = document.getElementById('span').innerHTML = this.U;
            document.getElementById('output').innerHTML = this.U + ' ' +key.target.value.substring(0,1)
        }
    }
});
app.mount('#app');