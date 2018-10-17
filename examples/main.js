import Vue from 'vue';
import App from './App';
import IGTUI from '../src/index';

Vue.use(IGTUI);
Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')