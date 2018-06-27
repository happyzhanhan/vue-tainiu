<!--
 * Created by happy<1659725767@qq.com> on 2018/6/25 16:49.
 -->

<template>
 <div class="pay">
   <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
   <div class="paybox">
      <div class="paytext">
          <p><b>订单编号：</b><em>TN465464</em></p>
          <P><b>应付金额：</b><em class="red">￥200000.0</em></P>
      </div>
   </div>

   <div class="paytype">
     <div class="lineboxtext">
       <b>付款方式:</b>
     </div>
    <div class="typeone">
     <label for="payscene">
        <div class="title">
         <input type="radio" id="payscene" name="paytype"/>
         <b>现场缴费（已付）</b>
        </div>
        <div class="payform">
         <b>付款口令：</b>
         <input type="text" placeholder="请输入口令"/>
        </div>
     </label>
    </div>
    <div class="typeone">
     <label for="payafter">
        <div class="title">
         <input type="radio" id="payafter" name="paytype" />
         <b>线下转账</b>
        </div>
        <div class="payform">
         <b>转账信息：</b>
         <input type="text" placeholder="请输入转账编号+银行+姓名+电话"/>
        </div>
     </label>
    </div>
   </div>

  <div class="imgupload">
   <p>汇款凭证拍照上传：</p>
   <div class="imglist">
    <span>
     <img src="../assets/imgupload.jpg" alt=""/>
    </span>
   </div>
  </div>

  <div class="notes">
    <h5>转账说明</h5>
    <p>1.转账到银行卡622XXXXXXXXXXXX（毛丹），凭证请保留拍照上传；</p>
    <p>2.支付宝转账到165XXXXXXXXXXXXXX4@qq.com（毛丹），请备注流  水号；</p>
    <p>3.微信转账请加微信：yggx_01为好友转账；</p>
    <p>* 除以上方式，请自行保障财产安全。</p>
  </div>

  <div class="btnbox">
    <button>提  交</button>
  </div>
 </div>
</template>

<script>
 import tnhead from '@/components/Head.vue';

 export default{
  name:'pay',
  components:{tnhead},
  data(){
   return{
    headname:'付款',
    headstyle:'whitetop',
   }
  }
 }
</script>

<style lang="scss" scoped>
.pay{
 background:#f5f5f5;
 height:94vh;
 padding-top:6vh;
 text-align:left;
}
 .paytext{
  background:#fff;
  line-height:26px;
  margin-top:5px;
  margin-bottom:5px;
  padding:10px 20px;
  box-sizing:border-box;
  em{
   font-weight:600;
   &.red{color:#e81b0f;}
  }
 }

.paytype{
 background:#fff;
 line-height:40px;
 .typeone{
  &:hover,&.hover{
      background:#fafafa;
    input[type=text]{
     background:#fafafa;
    }
  }
  div{
   padding:0 20px;
   box-sizing:border-box;
   display:flex;
   flex-direction: row;
   align-items: center;
   border-bottom:1px solid #f7f7f7;
   input[type=radio]{margin-right:6px;}
   input[type=text]{width:70%;}
   &:nth-child(2){
     b{
      margin-left:20px;
     }
       
    }
  }
 }

}

.imgupload{
 background:#fff;
 margin-top:5px;
 box-sizing:border-box;
 padding:10px 20px;
 p{line-height:30px;}
 .imglist{
  span{
   img{width:70px;height:70px;}
  }
 }
}

.notes{
 box-sizing:border-box;
 padding:10px 20px;
font-size:12px;
 h5{
  font-weight:600;
  font-size:14px;
  line-height:30px;
 }

}
</style>