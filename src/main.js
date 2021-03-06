import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; 
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';


Vue.use(VueResource);
Vue.use(VueRouter)


const router = new VueRouter({ 
  routes ,
  mode: 'history'
});
/* Quando tem o mesmo nome, 
 exemplo "routes: routes:" 
 pode ser deixado apenas um "routes" */





new Vue({                     // <-----------------
  el: '#app',               // <--- View instance |   
   router,                   // <------------------
  render: h => h(App)     
})
