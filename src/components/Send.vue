<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:58.
 -->

<template>
<div class="send">
 <div class="sendhead">
  <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
  123456456
 </div>
</div>
</template>

<script>
 import tnhead from '@/components/head.vue';
export default{
 name:'Send',
 components:{tnhead},
 data(){
  return{
   headname:'派单',
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