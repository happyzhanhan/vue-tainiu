<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:59.
 -->

<template>
 <div class="send">
  <div class="sendhead">
   <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
   1234654
  </div>
 </div>
</template>

<script>
 import tnhead from '@/components/head.vue';
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
  height:94vh;
  background:#f5f5f5;
 }
</style>