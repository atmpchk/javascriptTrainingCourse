import Vue from 'vue';
import { registerGlobally, setDefaultBaseUrlFromEnv } from './assets/js/vue/axios';
import App from './App.vue';
import router from './router';
import formatter from './assets/js/formatter';
import 'bootstrap';
import './assets/js/jquery';
import './assets/js/vue/loading';
import './assets/js/vue/veeValidate';

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

registerGlobally();
setDefaultBaseUrlFromEnv();

Vue.filter('formatCurrency', formatter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
