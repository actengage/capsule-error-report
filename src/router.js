import Vue from 'vue';
import Router from 'vue-router';
import Home from './Views/Home';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            children: [{
                path: '',
                name: 'home',
                component: () => import('./Components/BugReport.vue'),
            },{
                path: '/contact',
                name: 'contact',
                component: () => import('./Components/ContactForm.vue'),
            }]
        },{
            path: '/fix',
            name: 'fix',
            component: () => import('./Components/Editor.vue')
        }
    ]
});