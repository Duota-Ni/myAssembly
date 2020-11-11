<template>
  <div class="home">
    <h1>测试组件</h1>
    <du-test></du-test>
    <h1>按钮组件</h1>
    <du-button @click="handleClick">默认按钮</du-button>
    <du-button type="primary">主要按钮</du-button>
    <du-button type="success">成功按钮</du-button>
    <du-button type="info">信息按钮</du-button>
    <du-button type="warning">警告按钮</du-button>
    <du-button type="danger">危险按钮</du-button>
    <h1>input组件</h1>
    <du-input v-model="input" placeholder="请输入内容"></du-input>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.row .du-input {
    width: 180px;
}

</style>
