import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './assets/tailwind.css';
import './vee-validate-config';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
