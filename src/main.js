import Vue from 'vue';
import App from './App.vue';
import Modal from 'vue-interface/src/Plugins/Modal';

Vue.use(Modal);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
