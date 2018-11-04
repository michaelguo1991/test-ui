import IgtCard from './src/index'

IgtCard.install = Vue => {
    Vue.component(IgtCard.name, IgtCard);
}

export default IgtCard;
