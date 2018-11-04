import Vue from 'vue';
import App from './App';
import IGTUI from '../src/index';
import VueRouter from 'vue-router';
import DemoBlock from './components/demo-block';
import 'highlight.js/styles/color-brewer.css'
import { Button } from 'element-ui';
// import 'highlight.js/styles/github.css'

import routes from './router';

Vue.use(IGTUI);
Vue.use(VueRouter);
Vue.component('DemoBlock', DemoBlock);
Vue.use(Button);
Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')