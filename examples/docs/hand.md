# 头部测试

:::demo 通过设置 `separator-class` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 设置失效
```html
<h1>测试</h1>
```
:::

:::demo 使用`datetimerange`进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`作为起始与结束的时刻；通过选项`default-time`可以控制选中起始与结束日期时所使用的具体时刻。`default-time`接受一个数组，数组每项值为字符串，形如`12:00:00`，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。
```html
<template>
  <div class="block">
    <span class="demonstration">起始日期时刻为 12:00:00</span>
    
  </div>
  <div class="block">
    <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
  </div>
</template>
```
:::

<script>
  export default {
    data() {
      return {
        msg: '测试markdown解析'
      }
    },
    methods: {
      hello() {
        console.log('hello');
      }
    }
  }
</script>

<style>
  h2 {
    color: red;
  }
</style>