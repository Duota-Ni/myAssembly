<template>
   <div class="du-test" @click="handleClick">{{num}}</div> 
</template>
<script>
export default {
  name:"DuTest",
  data(){
    return {
    num:0
    }
  },
  methods:{
      handleClick(){
          this.num++
      }
  }
}
</script>
<style lang="less">
.du-test{
      width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  background: #69cfff;
  color: white;
}
</style>
