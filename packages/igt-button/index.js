import IGTButton from './src/index'

IGTButton.install = Vue => {
    Vue.component(IGTButton.name, IGTButton);
}

export default IGTButton