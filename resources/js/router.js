import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//importiamo le singole pagine
import About from './pages/About';
import Home from './pages/App';

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path:'/',
			name: 'home',
			component: Home		
		},
		{
			path: 'about',
			name: 'about',
			component: About,
		},
	] 
})

export default router