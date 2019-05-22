import Vue from 'vue';
import Router from 'vue-router';
import Editor from './Components/Editor.vue';
import BugReport from './Components/BugReport.vue';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: BugReport
        },{
            path: '/fix',
            name: 'fix',
            component: Editor
        },{
            path: '/success',
            name: 'success',
            component: Editor
        }
    ]
});