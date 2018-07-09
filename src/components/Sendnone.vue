<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:59.
 -->

<template>
 <div class="send">
  <div class="sendhead">
   <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>

  </div>

  <div class="sendnone">
    <div class="sendreson">
     <b>发不了货的原因：</b>
     <textarea placeholder="无故拒绝发货会影响对您的信用评估"></textarea>
    </div>
    <div class="btnbox">
     <button>提交原因</button>
    </div>
  </div>
 </div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
 export default{
  name:'Sendnone',
  components:{tnhead},
  data(){
   return{
    headname:'发不了货',
    headstyle:'whitetop',
   }
  }
 }
</script>

<style lang="scss" scodep>
 .send{
  position:relative;
  min-height:94vh;
  padding-top:50px;
  background:#f5f5f5;
 }

 .sendnone{
  .sendreson{
   margin-top:5px;
   margin-bottom:100px;
   background:#fff;
  position:relative;
  b{
   position:absolute;
   left:10px;
   top:10px;
  }
   textarea{
    border:none;
    width:100%;
    max-width:100%;
    max-height:160px;
    height:160px;
    text-indent:120px;
    padding:10px;
    box-sizing:border-box;
    outline:none;
   }
  }
 }
</style>