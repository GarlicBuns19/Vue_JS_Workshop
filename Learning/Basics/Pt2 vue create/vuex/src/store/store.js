import Vue from 'vue'; 
import vuex from 'vuex';

Vue.use(vuex); 

const store = new vuex.Store({
    state:{
        products: [
            {book:'Pots'},
            {book:'Food'},
            {book:'Bread'}
          ]
    }
})