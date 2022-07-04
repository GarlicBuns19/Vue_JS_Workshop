const app = Vue.createApp({
    
    data(){
        return {
            greeting: 'Bonjour',
            help: 'Plz Help',
            time: 'Now, Like Right Now'
        }
    },
    data: function(){
        return {
            greeting: 'Bonjour',
            help: 'Plz Help',
            time: 'Now, Like Right Now'
        }
    }
});
// Mount it
app.mount('#app');

// Excercise
// Create excercise that displays your name and surname