import Vue from 'vue';
import axios from 'axios';
import Modal from 'vue-interface/src/Plugins/Modal';
import App from './App.vue';

Vue.use(Modal);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
