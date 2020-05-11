import Vue from 'vue';
// eslint-disable-next-line
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import { makeServer } from './mock/server';

Vue.use(VueResource);
makeServer();
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
