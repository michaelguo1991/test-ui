<template>
    <div>
        <igt-button>测试按钮</igt-button>
        <igt-button type="success">成功按钮</igt-button>
        <igt-button @click="handleClick">点击按钮</igt-button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick(evt) {
            console.log('click button: ', evt);
        }
    }
}
</script>
