<template>
   <div class="du-test" @click="handleClick">{{num}}</div> 
</template>
<script>
export default {
  name:"DuTest",
  componets:{

  },
  props:{

  },
  vuex:{

  },
  data(){
    return {
    num:0
    }
  },
  computed:{

  },
  watch:{

  },
  methods:{
      handleClick(){
          this.num++
      }
  },
  beforeCreate(){

  },
  created(){

  },
  beforeMount(){

  },
  mounted(){

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
