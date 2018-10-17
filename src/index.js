import IGTButton from '../packages/button';

const components = [
    IGTButton
];

const install = Vue => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install,
    IGTButton
}