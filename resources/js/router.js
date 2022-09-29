import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//importiamo le singole pagine
import About from './pages/About';
ecc

const router = new VueRouter({
	mode: 'history',
	routes: [
	/* 	{
			path:'/',
			name: 'home',
			component: Home		
		},
		{
			path: 'about',
			name: 'about',
			component: About,
		},
		{
			path: '/posts/:id',
			name: 'posts.show',
			component: SinglePost
		}*/
	] 
})

export default router