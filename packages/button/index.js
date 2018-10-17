import IGTButton from './src/button'

IGTButton.install = Vue => {
    Vue.component(IGTButton.name, IGTButton);
}

export default IGTButton