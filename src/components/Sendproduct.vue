<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:58.
 -->

<template>
 <div class="send">
  <div class="sendhead">
   <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
   1234564
  </div>
 </div>
</template>

<script>
import tnhead from '@/Components/head.vue';
 export default{
  name:"Sendproduct",
  data(){
 return{
  headname:'立即发货',
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