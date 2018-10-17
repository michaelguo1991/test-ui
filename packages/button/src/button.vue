<template>
    <button
        class="igt-button"
        @click="handleClick"
        :disabled="disabled"
        :type="nativeType"
        :autofocus="autoFocus"
        :class="[
            type ? 'igt-button--' + type : '',
            size ? 'igt-button--' + size : '',
            {
                'is-disabled': disabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': plain,
                'is-circle': circle
            }
        ]"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'IgtButton',
    
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        size: String,
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        autoFocus: Boolean
    },

    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style>
    .igt-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-color: #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    .igt-button--primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .igt-button--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
    }
    .igt-button--primary.is-plain {
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
    }
    .igt-button--success.is-plain {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
    }

</style>
