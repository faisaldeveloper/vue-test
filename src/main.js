import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import * as VueGoogleMaps from "vue2-google-maps";

import Todo from "./components/Todo.vue";
import Common from "./components/Common.vue";
import Cards from "./components/Cards.vue";
import Maps from "./components/Maps.vue";
import About from "./components/About.vue";

Vue.use(VueGoogleMaps, {
  load: {
    //key: "AIzaSyBcOYTNjodF1GoG3szMbP29Yh27jIwrAlE",
    key: "AIzaSyBw4aMGBPUGwg9wtHe-a-Qsan3MP1r4Jr0",
    libraries: "maps" // necessary for places input
  }
});


Vue.use(BootstrapVue);

Vue.use(VueRouter);

Vue.config.productionTip = false;

// We create the router instance here.
/*const router = new VueRouter({
  routes
});*/

// export default new VueRouter({
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: Common
//     },
//     {
//       path: "/todo",
//       name: "Todo",
//       component: Todo
//     }
//     ]
// });

const router = new VueRouter({
	mode: 'history',
routes: [
	{ path: '/', component: Common },
	{ path: '/order', component: Cards },
	{ path: '/todo', component: Todo },
	{ path: '/maps', component: Maps },
	{ path: '/about', component: About }
]
})


new Vue({
	router,
  render: h => h(App)
}).$mount("#app");
