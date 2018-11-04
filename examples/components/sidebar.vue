<template>
    <ul class="sidebar-list">
        <li class="sidebar-item" v-for="(config, index) in sidebarConfigs" :key="index">
            <router-link class="sidebar-item__link sidebar-item__link--large" active-class="active" v-if="config.path" :to="'/guider' + config.path">{{ config.text }}</router-link>
            <template v-if="config.children && config.children.length > 0">
                <a class="sidebar-item__title">{{ config.title }}</a>
                <ul>
                    <li v-for="(childConfig, childIndex) in config.children" :key="childIndex">
                        <router-link class="sidebar-item__link" active-class="active" v-if="childConfig.path" :to="'/guider' + childConfig.path">{{ childConfig.text }}</router-link>
                        <template v-if="childConfig.children && childConfig.children.length > 0">
                            <a class="sidebar-item__subtitle">{{ childConfig.title }}</a>
                            <ul>
                                <li v-for="(secondConfig, secondConfigIndex) in childConfig.children" :key="secondConfigIndex">
                                    <router-link class="sidebar-item__link" active-class="active" v-if="secondConfig.path" :to="'/guider' + secondConfig.path">{{ secondConfig.text }}</router-link>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </template>
        </li>
    </ul>
</template>

<script>
    const appConfig = require('../config/config.json');
    const sidebarConfigs = appConfig.sidebar;

    export default {
        data() {
            return {
                sidebarConfigs: sidebarConfigs
            }
        },
        created() {
            
        }
    }
</script>

<style>
    .sidebar-item {
        margin-top: 20px;
    }
    .sidebar-item:first-child {
        margin-top: 0;
    }
    .sidebar-item__title {
        display: block;
        font-weight: bold;
        font-size: 16px;
        line-height: 1.7;
        margin-bottom: 10px;
    }
    .sidebar-item__subtitle {
        display: block;
        color: #99a9bf;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        padding-left: 24px;
    }
    .sidebar-item__link {
        color: #2c3e50;
        font-weight: normal;
        display: inline-block;
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        padding-left: 24px;
    }
    .sidebar-item__link.active {
        color: #3eaf7c;
    }
    .sidebar-item__link--large {
        font-size: 16px;
        padding-left: 0;
    }
    .sidebar-item__link:hover {
        color: #3eaf7c;
    }
</style>
