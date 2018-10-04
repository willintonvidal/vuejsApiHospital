import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Login from './components/Login.vue';
import Prueba from './components/Prueba.vue';
import Paciente from './components/Paciente.vue';



const routes =[
  {
    name:'Login',
    path: '/',
    component: Login
  },
  {
    name:'MostrarPrueba',
    path: '/prueba',
    component: Prueba
  },
  {
    name:'MostrarPaciente',
    path: '/paciente',
    component: Paciente
  }
]

const router = new VueRouter({mode:'history',routes:routes});
new Vue(Vue.util.extend({router},App)).$mount('#app');
