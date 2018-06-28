<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:58.
 -->

<template>
<div class="send">
 <div class="sendhead">
  <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
 </div>

 <div class="paidian">
  <div class="fixed">
   <p class="tips">*您有新的派单，请尽快发货哦！~</p>
   <div class="tabnav">
    <ul>
     <li class="hover">全部订单</li>
     <li>待发货</li>
     <li>已发货</li>
    </ul>
   </div>
  </div>

  <div class="tabcontent">
    <div class="top">
     <span>
      <p>订单编号：46423123456</p>
      <p>下单时间：2018-06-16 05:22:55</p>
     </span>
     <span>
      <b>待发货</b>
     </span>
    </div>
   <div class="product">
    <span><img src="../assets/product-01.jpg" alt=""></span>
    <span>
     <p><b>产品:泰国红牛（整箱）</b><em>￥90.0</em></p>
     <p><b>规格：250ml×24瓶</b><em>×50</em></p>
    </span>
   </div>
   <div class="location">
    <span>
     <i class="el-icon-location-outline"></i>
    </span>
    <span>
     <p><b>收货人：柯基</b><em>15088700456</em></p>
     <p>收货地址：浙江省杭州市江干区下沙13号大街53号</p>
    </span>
   </div>
   <div class="moneyall">
    共50件商品，收货款金额￥ <big>450.0</big>
   </div>
   <div class="btnline">
    <button class="red" @click="tosendproduct">立即发货</button>
    <button @click="tosendnone">发不了货</button>
   </div>
  </div>
 </div>

 <div class="tabcontent">
  <div class="top">
     <span>
      <p>订单编号：46423123456</p>
      <p>下单时间：2018-06-16 05:22:55</p>
     </span>
     <span>
      <b>待发货</b>
     </span>
  </div>
  <div class="product">
   <span><img src="../assets/product-01.jpg" alt=""></span>
    <span>
     <p><b>产品:泰国红牛（整箱）</b><em>￥90.0</em></p>
     <p><b>规格：250ml×24瓶</b><em>×50</em></p>
    </span>
  </div>
  <div class="location">
    <span>
     <i class="el-icon-location-outline"></i>
    </span>
    <span>
     <p><b>收货人：柯基</b><em>15088700456</em></p>
     <p>收货地址：浙江省杭州市江干区下沙13号大街53号</p>
    </span>
  </div>
  <div class="moneyall">
   共50件商品，收货款金额￥ <big>450.0</big>
  </div>
  <div class="btnline">
   <button class="red">立即发货</button>
   <button>发不了货</button>
  </div>
 </div>
</div>



</div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
export default{
 name:'Send',
 components:{tnhead},
 data(){
  return{
   headname:'派单',
   headstyle:'whitetop',
  }
 },
 methods:{
  tosendnone:function(){
   this.$router.push({path:'/sendnone'})
  },
  tosendproduct:function(){
   this.$router.push({path:'/sendproduct'})
  }
 }

}
</script>

<style lang="scss" scodep>
.send{
 position:relative;
 height:94vh;
 padding-top:6vh;
 background:#f5f5f5;
}
/*
.fixed{
 position:fixed;
 top:0;
 z-index:2;
}*/
 .paidian{
 width:100%;
  .tabnav{
  wiidth:100%;
   ul{
   width:100%;
   display:flex;
    flex-direction: row ;
    align-items: stretch;
    justify-content: space-around;
    li{
     width:33.33%;
     line-height:40px;
     background:#fff;
     font-weight:600;
     position:relative;

     &:before{
      content:"";
      position:absolute;
      width:1px;
      height:30px;
      display:block;
      background:#f5f5f5;
      right:0;
      top:5px;
      }
     &:after{
       content:'';
       position:absolute;
       bottom:0;
       left:50%;
       margin-left:-50px;
       width:100px;
       height:2px;
       background:#f0160d;
       display:none;
      }
      &:last-child{
       &:before{
        display:none;
       }
      }
      &:hover,&.hover{
       color:#f0160d;
        &:after{display:block;}
      }
    }
   }
  }
 }

.tabcontent{
margin-top:4px;
background:#fff;
 .top{
  display:flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  text-align:left;
  padding:10px;
  box-sizing:border-box;
  border-bottom:1px solid #f4f4f4;
  p{color:#676767;font-size:10px;line-height:20px;}
  b{color:red;}
 }
 .product{
  margin-top:3px;
  background:#fafafa;
  display:flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  padding:10px;
  box-sizing:border-box;

   span{
     display:block;
    &:nth-child(1){
      width:20%;
   img{
    border:1px solid #e2e2e2;
   }
     }
    &:nth-child(2){
      width:80%;
     }
     img{
      width:40px;
      height:40px;
     }
     p{
     width:100%;
     display:inline-block;
     &:nth-child(1){
      color:#000;
      font-weight:600;
      font-size:14px;
      }
      &:nth-child(2){
       color:#a1a1a1;
       font-size:10px;

       }
     b{float:left;}
     em{
       float:right;
       text-align:right;
      font-style:normal;
      }
     }
   }
 }
 .location{
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
 .moneyall{
  line-height:40px;
  text-align:right;
  padding:0 10px;
 border-bottom:1px solid #f4f4f4;
  big{
   font-weight:600;
  }
 }
 .btnline{
 width:100%;
 height:40px;
 padding:0 10px;
 box-sizing:border-box;
  button{
   border:none;
   outline:none;
   border-radius:50px;
   padding:5px 10px;
   margin-top:6px;
   font-size:12px;
   border:1px solid #414547;
   color:#414547;
   background:#fff;
   float:right;
   display:inline-block;
   margin-left:10px;
   &.red{
     border:1px solid #f40000;
     color:#f40000;
     background:#fff;
    }
  }
 }
}
</style>