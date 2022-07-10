import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')

store.commit('increment')

console.log(store.state.count) // -> 1

