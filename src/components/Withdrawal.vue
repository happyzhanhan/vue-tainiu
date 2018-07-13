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
          <el-radio v-model="wallet_type" label="PAYMENT_FOR_GOODS">货款</el-radio>
          <el-radio v-model="wallet_type" label="PROFIT">利润</el-radio>
      </div>
     <div class="linebox">
      <label for="name">真实姓名</label>
      <input type="text" placeholder="请输入银行卡开户人姓名" v-model="bank_owner"/>
      <span><i class="el-icon-success" :class="{'success':isSuccess}"></i></span>
     </div>
     <div class="linebox">
      <label for="name">开户行</label>
      <input type="text" placeholder="请填写开户行名称" v-model="bank_beneficiary"/>
      <span><i class="el-icon-success" :class="{'success':isSuccess2}"></i></span>
     </div>
      <div class="linebox">
          <label for="name">银行名称</label>
          <input type="text" placeholder="请填写银行名称" v-model="bank_name"/>
          <span><i class="el-icon-success" :class="{'success':isSuccess3}"></i></span>
      </div>
     <div class="linebox">
      <label for="name">银行卡号</label>
      <input type="number" placeholder="请输入银行卡号" v-model="bank_code"/>
      <span><i class="el-icon-success" :class="{'success':isSuccess4}"></i></span>
     </div>
     <!--<div class="linebox">
      <label for="name">联系方式</label>
      <input type="text" placeholder="请输入联系电话"/>
      <span><button>发送验证码</button></span>
     </div>
     <div class="linebox">
      <label for="name">验证码</label>
      <input type="text" placeholder="1234"/>
      <span><i class="el-icon-success"></i></span>
     </div>-->
     <div class="linebox">
      <label for="name">提现金额</label>
      <input type="number" placeholder="0.0"  v-model="withdrawal_money"/>
      <span><button class="success" @click="withdrawal_money=showmoneyall">全部提现</button></span>
     </div>
     <div class="linebox">
      <em>可提现金额 {{showmoneyall}}</em>
      <em>最低提现金额200元</em>
     </div>
   </div>
  <div class="tip">
   * 提现时，银行将会按照规定扣除手续费，请悉知！
  </div>
  <div class="btnbox">
   <button :class="{'success':isSuccess5}" :disabled="!isSuccess5" @click="postdata">提交申请</button>
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
               wallet_type:'PAYMENT_FOR_GOODS',
               withdrawal_money:'',
               bank_name:'',
               bank_code:'',
               bank_owner:'',
               bank_beneficiary:'',

               isSuccess:false,
               isSuccess2:false,
               isSuccess3:false,
               isSuccess4:false,
               isSuccess5:false,

               goodspayment:{
                   money:0.0,
               },
               balance:{
                   money:0.0,
               },
               profit:{
                   money:0.0,
               },
               bzj:{
                   money:0.0,
               },

           }
      },
    created:function(){
        this.getAjaxwallet();
    },
     watch:{
         bank_owner:{
             handler:function(val,oldval){
                 if(val){
                     this.isSuccess=true;
                 }else{
                     this.isSuccess=false;
                 }
             },
             deep:true
         },
         bank_beneficiary:{
             handler:function(val,oldval){
                 if(val){
                     this.isSuccess2=true;
                 }else{
                     this.isSuccess2=false;
                 }
             },
             deep:true
         },
         bank_name:{
             handler:function(val,oldval){
                 if(val){
                     this.isSuccess3=true;
                 }else{
                     this.isSuccess3=false;
                 }
             },
             deep:true
         },
         bank_code:{
             handler:function(val,oldval){
                 if(val){
                     this.isSuccess4=true;
                 }else{
                     this.isSuccess4=false;
                 }
             },
             deep:true
         },
         withdrawal_money:{
             handler:function(val,oldval){
                 if(val){
                     this.isSuccess5=true;
                 }else{
                     this.isSuccess5=false;
                 }
             },
             deep:true
         },
     },
     computed:{
         showmoneyall:function(){
             if(this.wallet_type=='PAYMENT_FOR_GOODS'){
                 return this.goodspayment.money;
             }else if(this.wallet_type=='PROFIT'){
                 return this.profit.money;
             }
         },
     },
     methods:{
         getAjaxwallet:function () {
             let data = {};
             let _this = this;
             this.axios.post('/index.php/index/My_manage/WalletSelectService.html',data).then((res)=>{

                 if(res.data.code=='SUCCESS'){
                 let databaserows = res.data.data.wallet.rows;
                 for(var i in databaserows){
                     if(databaserows[i].type=='PAYMENT_FOR_GOODS'){
                         _this.goodspayment.money = databaserows[i].total_money;
                     }else if(databaserows[i].type=='BALANCE'){
                         _this.balance.money = databaserows[i].total_money;
                     }else if(databaserows[i].type=='PROFIT'){
                         _this.profit.money = databaserows[i].total_money;
                     }
                 }


                 }else if(res.data.code == 'LOGIN_TAINIU_ERROR'){
                     this.$message({
                         message: '登录超时，请重新登录',
                         type: 'error',
                         customClass:'black'
                     });
                     _this.$router.push({path:'/login'});
                 }else{
                     this.$message({
                         message: '获取失败：'+res.data.message,
                         type: 'error',
                         customClass:'black'
                     });
                 }
             },(res)=>{
                 this.$message({
                     message: '系统错误！',
                     type: 'error',
                     customClass:'black'
                 });
                 console.log(res);
             })
         },
         postdata:function(){
             let _this = this;
             let data = {
                     wallet_type:this.wallet_type,
                     withdrawal_money:this.withdrawal_money,
                     bank_name:this.bank_name,
                     bank_code:this.bank_code,
                     bank_owner:this.bank_owner,
                     bank_beneficiary:this.bank_beneficiary,
             };
             this.axios.post('/index.php/index/My_manage/PutForwardService.html',data).then((res)=>{
                 if(res.data.code=='SUCCESS'){
                     this.$message({
                         message: '提现申请已提交',
                         type: 'success',
                         customClass:'black'
                     });
                     _this.$router.push({path:'/'});
                }else{
                     this.$message({
                         message: '提交失败：'+res.data.message,
                         type: 'error',
                         customClass:'black'
                     });
                 }

             },(res)=>{
                 this.$message({
                     message: '错误：'+res.data.message,
                     type: 'error',
                     customClass:'black'
                 });
             })
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
        &.success{
             color:rgb(19, 206, 102);
         }
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