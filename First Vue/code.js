const app = Vue.createApp({
    data: function(){
        return {
            greeting: 'Bonjour'
        }
    }
});
// Mount it
app.mount('#app')