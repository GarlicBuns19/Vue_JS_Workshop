const app = Vue.createApp({
    template: `
        <div v-if='isVisible1' id='box1'>
            <p>Box 1</p>
        </div>
        <div v-else-if='isVisible2' id='box2'>
            <p>Box 2</p>
        </div>
        <div v-else='isVisible3' id='box3'>
            <p>Box 3</p>
        </div>
    `,
    data: function() {
        return {
            isVisible1: true,
            isVisible2: true,
            isVisible3: true
        }
    },
    methods: {
    }
});
app.mount('#app');