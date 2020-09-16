import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Todo from "./components/misc/Todo.vue";
import Common from "./components/Common.vue";
import Cards from "./components/bootstrap-components/Cards.vue";
import Maps from "./components/misc/Maps.vue";
import Movies from "./components/misc/Movies.vue";
import Bulma from "./components/bulma-components/Bulma.vue";
//import MoviesPlayingNow from './components/misc/MoviesPlayingNow.vue'

//const router = new VueRouter({
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Common },
		{ path: '/order', component: Cards },
		{ path: '/todo', component: Todo },
		{ path: '/maps', component: Maps },
		{ path: '/movies', component: Movies },
		//{ path: '/movies-playing-now', name: 'moviesplayingnow', component: MoviesPlayingNow },
		{ path: '/bulma', component: Bulma }
	]
});