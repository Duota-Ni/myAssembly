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
    <br/>
    <br/>
    <du-button plain>朴素按钮</du-button>
    <du-button type="primary" plain>主要按钮</du-button>
    <du-button type="success" plain>成功按钮</du-button>
    <du-button type="info" plain>信息按钮</du-button>
    <du-button type="warning" plain>警告按钮</du-button>
    <du-button type="danger" plain>危险按钮</du-button>
    <br/>
    <br/>
    <du-button round>圆角按钮</du-button>
    <du-button type="primary" round>主要按钮</du-button>
    <du-button type="success" round>成功按钮</du-button>
    <du-button type="info" round>信息按钮</du-button>
    <du-button type="warning" round>警告按钮</du-button>
    <du-button type="danger" round>危险按钮</du-button>
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
