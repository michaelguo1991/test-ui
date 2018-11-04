<template>
    <div class="root">
        <header class="uidoc-header">
            <main-header></main-header>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import MainHeader from './components/header';

export default {
    components: {
        MainHeader
    },
    data() {
        return {

        }
    },
    mounted() {
        this.$el.style.height = window.innerHeight + 'px';
    },
    methods: {
        
    }
}
</script>

<style>
    @import './css/reset.css';

    .flex {
        display: flex;
    }
    [flex~='1'] {
        flex: 1;
    }
    [flex~='v-center'] {
        align-items: center;
    }
    .root {
        display: flex;
        flex-direction: column;
    }
    .uidoc-header {
        height: 58px;
        padding: 0 24px 0 60px;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #eaecef;
        justify-content: space-between;
    }
    
    .uidoc-sidebar {
        width: 320px;
        border-right: 1px solid #eaecef;
        overflow: scroll;
        padding: 40px 0 40px 60px;
    }
    .uidoc-main {
        overflow: scroll;
        padding: 20px 100px 40px 40px;
    }
</style>