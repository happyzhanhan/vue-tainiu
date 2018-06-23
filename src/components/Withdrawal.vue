<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 15:10.
 -->
<template>
 <div class="withdrawal">
  <div class="withdrawalhead">
    <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
   </div>

  <div class="withdrawalform">
     <div class="linebox">
      <label for="name">真实姓名</label>
      <input type="text" placeholder="请输入银行卡开户人姓名"/>
      <span><i class="el-icon-success"></i></span>
     </div>
     <div class="linebox">
      <label for="name">开户行</label>
      <input type="text" placeholder="请填写开户行名称"/>
      <span><i class="el-icon-success"></i></span>
     </div>
     <div class="linebox">
      <label for="name">银行卡号</label>
      <input type="text" placeholder="请输入银行卡号"/>
      <span><i class="el-icon-success"></i></span>
     </div>
     <div class="linebox">
      <label for="name">联系方式</label>
      <input type="text" placeholder="请输入银行绑定的手机号或联系电话"/>
      <span><button>发送验证码</button></span>
     </div>
     <div class="linebox">
      <label for="name">验证码</label>
      <input type="text" placeholder="1234"/>
      <span><i class="el-icon-success"></i></span>
     </div>
     <div class="linebox">
      <label for="name">提现金额</label>
      <input type="text" placeholder="0.0"/>
      <span><button>全部提现</button></span>
     </div>
     <div class="linebox">
      <em>可提现金额5653131.00</em>
      <em>最低提现金额200元</em>
     </div>
   </div>
  <div class="tip">
   *每月22号可提现上个月22号的订单利润
  </div>
  <div class="btnbox">
   <button>提交申请</button>
  </div>

  </div>
</template>

<script>
 import tnhead from '@/components/head.vue';
 export default {
  name: 'Withdrawal',
  components: {tnhead},
   data (){
   return {
    headname:'提现',
    headstyle:'whitetop',
   }
  }
 }
</script>

<style lang="scss" scoped>
.withdrawal{
 background:#f2f2f2;

 height:94vh;
}

.withdrawalform{
margin-top:6vh;
padding-top:10px;

 .linebox{
  display:flex;
  flex-direction: row ;
  align-items: center;
  justify-content: space-between;
 width:100%;
 box-sizing:border-box;
 padding:0 20px;
 background:#fff;
 border-bottom:1px solid #f2f2f2;
 line-height:34px;

 em{
  font-style:normal;
  color:#a4a4a4;
 }
 label{width:20%; text-align:left;}
 input{width:50%;}
 span{
   width:30%;
   i{
    float:right;
    color:#f4f4f4;
   }
   button{
    border:none;
    width:100%;
    line-height:30px;
    border-radius:50px;
    color:#f79c97;
    background:#fbfbfb;
    &.success{
      color:#ea1c10;
     }
   }
 }


 }
}

.tip{
 margin-top:20px;
 margin-bottom:50px;
 text-align:left;
 width:100%;
 box-sizing:border-box;
 padding:0 20px;
}

 .btnbox{
   box-sizing:border-box;
   padding:0 20px;
   button{
    width:100%;
    border-radius:50px;
    background:#f99c97;
    color:#fff;
    border:none;
    font-size:16px;
    line-height:40px;
    outline:none;
   &.success{
     background:#ea1c10;
    }
   }
 }
</style>