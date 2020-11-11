<template>
  <div class="home">
    <du-test></du-test>
    <du-button @click="handleClick">默认按钮</du-button>
    <du-button type="primary">主要按钮</du-button>
    <du-button type="success">成功按钮</du-button>
    <du-button type="info">信息按钮</du-button>
    <du-button type="warning">警告按钮</du-button>
    <du-button type="danger">危险按钮</du-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
