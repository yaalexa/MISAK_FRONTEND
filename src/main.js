import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import VuePaginate from 'vue-paginate'
import Axios from 'axios'
import axios from 'axios'
import VueSession from 'vue-session';
Vue.use(VueSession)
Vue.config.productionTip = true
Vue.use(VuePaginate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use( VueAxios, Axios);
Vue.use( VueAxios, axios);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
var token=JSON.parse(sessionStorage.getItem("user"));
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Autorization']="Bearer "+token;
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.get['Content-Type']='application/json';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

