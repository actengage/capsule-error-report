import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import axios from 'axios';

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

new Vue({
    render: h => h(App)
}).$mount('#app');
