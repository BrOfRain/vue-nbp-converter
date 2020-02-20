import Vue from 'vue';
import VueRouter from 'vue-router';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import App from './App.vue';
import Table from './components/Table/Table.vue';
import Converter from './components/Converter/Converter.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.component('v-select', vSelect)

const routes = [
  {path: '/', component: Table},
  {path: '/converter', component: Converter}
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
