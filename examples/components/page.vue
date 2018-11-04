<template>
    <div class="page flex" flex="1">
        <nav class="uidoc-sidebar">
            <main-sidebar></main-sidebar>
        </nav>
        <main flex="1" class="uidoc-main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import MainSidebar from './sidebar';

export default {
    components: {
        MainSidebar
    },
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted');
    }
}
</script>

<style>
    h1, h2, h3 {
        position: relative;
    }
    a.header-anchor {
        opacity: 0;
        color: #3eaf7c;
        position: absolute;
        top: 1px;
        left: -16px;
    }
    h1:hover .header-anchor,
    h2:hover .header-anchor,
    h3:hover .header-anchor {
        opacity: 1;
    }
</style>