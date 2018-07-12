<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 15:10.
 -->
<template>
 <div class="withdrawal">
  <div class="withdrawalhead">
    <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
   </div>

  <div class="withdrawalform">
      <div class="lineboxtwo">
          <label for="name" class="selectwallet">选择钱包</label>
          <el-radio v-model="wallet_type" label="0">货款</el-radio>
          <el-radio v-model="wallet_type" label="1">利润</el-radio>
      </div>
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
      <input type="text" placeholder="请输入联系电话"/>
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
   *该功能正在开发中……
  </div>
  <div class="btnbox">
   <button>提交申请</button>
  </div>

  </div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
 export default {
  name: 'Withdrawal',
  components: {tnhead},
   data (){
   return {
    headname:'提现',
    headstyle:'whitetop',
       wallet_type:'0',
   }
  }
 }
</script>

<style lang="scss" scoped>
.withdrawal{
 background:#f2f2f2;
 font-size:12px;
 min-height:94vh;
}

.withdrawalform{
margin-top:50px;
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
 line-height:50px;

 em{
  font-style:normal;
  color:#a4a4a4;
     font-size: 12px;
 }
 label{width:20%; text-align:left; font-size:14px;}
 input{width:55%; font-size: 12px;}
 span{
   width:25%;
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

.lineboxtwo{
    line-height: 50px;
    background: #fff;
    border-bottom:1px solid #f2f2f2;
    box-sizing:border-box;
    padding:0 20px;
    float: left;
    width: 100%;
label{float: left;line-height: 50px;}
    label.selectwallet{
        width: 20%;
        float: left;
        font-size: 14px;
        text-align: left;
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

</style>