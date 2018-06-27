<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 10:24.
 -->

<template>
 <h3 class="headtop" :class="[ headstyle]">
  <span class="back"  @click="$router.back(-1)"><i class="el-icon-arrow-left"></i></span>
  <b>{{headname}}</b>
  <span class="operation"> <i>&nbsp;</i></span>
 </h3>
</template>

<script>
 export default {
  name: 'tnhead',
  data ()  {
    return {

    }
  },
  props: {
    headname: {
      type: String,
      default: '名称头部'
    },
    headstyle:{
      type: String,
      default: 'headtop'
    },
  },
 }
</script>

<style lang="scss" scoped>
 .headtop{
     position:fixed;
     top:0;
     left:0;
     z-index:99;
  width:100%;
  height:6vh;
  background:rgba(0,0,0,0);
  color:#fff;
  font-size:14px;
  line-heigth:6vh;
  display:flex;
  flex-direction: row ;
  align-items: center;
  justify-content: space-between;
  box-sizing:border-box;
  &.whitetop{
     background:#fff;
     color:#000;
     border-bottom:1px solid #ddd;
   }
  .back{
    display:inline-block;
    height:100%;
    padding:0 20px;
    &:hover{
       background:rgba(0,0,0,0.1);
     }
    i{
     line-height:6vh;
        font-size:20px;
    }
  }
  .operation{
    display:inline-block;
    height:100%;
    padding:0 20px;
    /*&:hover{
      background:rgba(0,0,0,0.1);
     }*/
    i{
     line-height:6vh;
    }
  }
 }

</style>