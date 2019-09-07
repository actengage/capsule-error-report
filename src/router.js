import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: 'home' */'./Views/Home.vue'),
            children: [{
                path: '',
                name: 'home',
                component: () => import(/* webpackChunkName: 'bug-report' */'./Components/BugReport.vue'),
            },{
                path: '/contact',
                name: 'contact',
                component: () => import(/* webpackChunkName: 'contact-form' */'./Components/ContactForm.vue'),
            }]
        },{
            path: '/fix',
            name: 'fix',
            component: () => import(/* webpackChunkName: 'editor' */'./Components/Editor.vue')
        }
    ]
});