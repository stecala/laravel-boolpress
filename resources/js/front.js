import Vue from 'vue';

window.Vue = require('vue');
import VueRouter from 'vue-router';

import App from './pages/App';
import router from './router';

const app = new Vue({
    el: '#root',
    render: h => h(App),
    router
});