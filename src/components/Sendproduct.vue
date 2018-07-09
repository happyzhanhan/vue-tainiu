<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:58.
 -->

<template>
 <div class="send">
  <div class="sendhead">
   <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
  </div>
  <div class="sendproduct">
   <div class="location">
    <span>
     <i class="el-icon-location-outline"></i>
    </span>
    <span>
     <p><b>收货人：柯基</b><em>15088700456</em></p>
     <p>收货地址：浙江省杭州市江干区下沙13号大街53号</p>
    </span>
   </div>
  </div>
  <div class="sendproductbox">
   <div class="lineform">
    <label for="sendnumber">发货单号</label>
    <input type="text" id="sendnumber" placeholder="请填写快递单号"/>
   </div>
   <div class="lineform">
    <label for="sendcourier">发货快递</label>
    <input type="text" id="sendcourier" placeholder="请填写快递名称"/>
   </div>
   <div class="imgpost">
    <p class="tips">*请拍摄快递面单，填写后再交给快递员！~</p>
    <div class="imagesbox">
      <span>
       <img src="../assets/imgupload.jpg" alt="" />
      </span>
    </div>

   </div>
  </div>
  <div class="btnbox">
   <button>立即发货</button>
  </div>
 </div>
</template>

<script>
import tnhead from '@/components/Head.vue';
 export default{
  name:"Sendproduct",
  components: {tnhead},
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
  position:relative;
  min-height:94vh;
  padding-top:50px;
  background:#f5f5f5;
 }

 .location{
  background:#fff;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing:border-box;
  padding:10px;
  border-bottom:1px solid #f4f4f4;
  color:#676767;

 span{
  text-align:left;
  font-size:14px;
 p{
 b{
  text-align:left;
 }
 em{
  float:right;
  font-style:normal;
 }
 }

 &:nth-child(1){
   width:20%;
   text-align:center;
 i{
  font-size:20px;
  text-align:center;
 }
 }
 &:nth-child(2){
   width:80%;
   float:left;
   text-align:left;
  }
 }
 }

 .sendproduct{
  margin-top:5px;

 }
 .sendproductbox{
 margin-top:10px;
    .lineform{
     display:flex;
     flex-direction: row ;
     align-items: stretch;
     justify-content: space-between;
     width:100%;
     box-sizing:border-box;
     padding:0 20px;
     background:#fff;
     border-bottom:1px solid #f2f2f2;
     line-height:40px;
    label{width:23%; text-align:left;}
    input{width:77%;text-align:left;}
    }
 }

 .imgpost{
  width:100%;
  margin-bottom:50px;
  background:#fff;
 text-align:left;
 .imagesbox{
  padding:10px 20px;
  box-sizing:border-box;
   img{
    width:80px;
    height:80px;
   }
 }

 }
</style>