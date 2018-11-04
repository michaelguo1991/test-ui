import Vue from 'vue';
import IGTUI from '../src/index';
import IGTButton from '../packages/igt-button/src';
import Play from './components/play';
import { version } from 'element-ui';

Vue.use(IGTUI);

console.log('IGTButton: ', IGTButton);

const btn = Vue.extend(IGTButton);
console.log('btn: ', btn);

new Vue({
    render: h => h(Play),
}).$mount('#app')
