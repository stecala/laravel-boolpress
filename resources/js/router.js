import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//importiamo le singole pagine
import About from './pages/About';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Post from './pages/Post';
import PageNotFound from './pages/errors/PageNotFound'

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path:'/',
			name: 'home',
			component: Home		
		}, 
		{
			path: '/about',
			name: 'about',
			component: About,
		},
        {
			path: '/contacts',
			name: 'contacts',
			component: Contacts,
		},
		{
			path: '/post/:id',
			name: 'post',
			component: Post,
		},
		{
			path: '*',
			name: 'pageNotFound',
			component: PageNotFound,
		}
	] 
})

export default router