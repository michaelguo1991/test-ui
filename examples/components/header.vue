<template>
    <div class="header-wrapper flex" flex="v-center">
        <a href="" class="site-name">Michael UI</a>
        <div class="links">
            <ul class="nav-links">
                <li class="nav-item is-active">
                    <a href="" class="nav-link">指南</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Gitlab</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style>
    .header-wrapper {
        justify-content: space-between;
        height: 100%;
    }

    .nav-links  .nav-item {
        display: inline-block;
        margin-left: 24px;
        line-height: 1.5;
    }
    .nav-link {
        display: inline-block;
        color: #2c3e50;
    }
    .nav-links  .nav-item:first-child {
        margin-left: 0;
    }
    .nav-item.is-active {
        border-bottom: 2px solid #46bd87;
    }
    .site-name {
        font-size: 20px;
        font-weight: 600;
        color: #2c3e50;
        position: relative;
    }
</style>
