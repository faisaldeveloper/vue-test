import Vue from "vue";
import App from "./App.vue";
import router from './router'

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import './../node_modules/bulma/css/bulma.css';

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    //key: "AIzaSyBcOYTNjodF1GoG3szMbP29Yh27jIwrAlE",
    key: "AIzaSyBw4aMGBPUGwg9wtHe-a-Qsan3MP1r4Jr0",
    libraries: "maps" // necessary for places input
  }
});

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
	router,
  render: h => h(App)
}).$mount("#app");
