<!--
 * Created by happy<1659725767@qq.com> on 2018/6/22 17:58.
 -->

<template>
 <div class="login">
  <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
  <div class="headtopthis">
   <div class="topbox">
    <span class="left"><router-link to="/login">忘记密码</router-link></span>

    <span class="right"><router-link to="/register">注册</router-link></span>
   </div>
   <div class="logobox">
    <h3>泰牛订货系统</h3>
   </div>
  </div>

  <div class="form">
   <div class="linebox" :class="{'success':isSuccess}">
    <b>{{person.telephone}}</b>
    <span>
     手机号码注册后暂不可更改
    </span>
   </div>
   <div class="linebox" :class="{'success':isSuccess2}">
    <input type="text" placeholder="请输入验证码"  v-model="verification" />
    <button v-show="show" :class="{'success':isSuccess1}" :disabled="!isSuccess1" @click="getCode">获取验证码</button>
    <button v-show="!show">{{count}}秒后重发</button>
   </div>
   <div class="linebox" :class="{'success':isSuccess3}">
    <input type="password" placeholder="请输入支付密码"  v-model="password"/>
   </div>
  </div>


  <div class="bigbtn">
   <button :class="{'success':isSuccess3}" :disabled="!isSuccess3" @click="postdata">设  置</button>
  </div>

 </div>
</template>

<script>
 const api = 'http://tainiu.yagou.com:8089';
 import tnhead from '@/components/Head.vue';

 export default {
  name: 'Forgetpassword',
  components: {tnhead},
  data () {
  return {
   headname: '设置支付密码',
   headstyle: 'whitetop',

   isSuccess:true,
   isSuccess1:true,
   isSuccess2:false,
   isSuccess3:false,
   timer:null,
   count:0,
   show:true,

   telephone:'',
   password:'',
   verification:'',
   uid: 0,
   person:{
    username:'木有用户名',
    rolerid:1,
    rolername:'区域代理',
    telephone:15088700456,
   },

  }
 },
 watch:{

   verification:{
    handler:function(val,oldval){
     if(val){
      this.isSuccess2=true
     }else{
      this.isSuccess2=false
     }
    },
    deep:true
   },
   password:{
    handler:function(val,oldval){
     if(val){
      this.isSuccess3=true;
     }else{
      this.isSuccess3=false;
     }
    },
    deep:true
   },
 },
 created:function(){
  this.getuid();
 },
 methods:{
  getuid(){
   let persondata=JSON.parse(localStorage.getItem("TAINIUPERSON"));
   console.log(persondata);
   if(persondata){
    this.person.rolerid = persondata.rule_id;
    this.person.username = persondata['username'];
    this.person.telephone = persondata['telephone'];

    switch(this.person.rolerid){    //角色： 0 新用户，1 区域代理，2 一级代理，3 二级代理，4 门店
     case 1:this.person.rolername = '区域代理';
      break;
     case 2:this.person.rolername = '一级代理';
      break;
     case 3:this.person.rolername = '二级代理';
      break;
     case 4:this.person.rolername = '门    店';
      break;
     default:this.person.rolername = '新用户';
      this.haspermissions = false;
      break;
    }
    this.uid=localStorage.getItem("TAINIUUID");
   }else{
    this.$router.push({path:'/login'})
   }
  },
  getCode:function(){

   var reg=11 && /^1[3456789]\d{9}$/ ;
   if(!reg.test(parseInt(this.person.telephone))){
    this.$message({
     message: '手机格式不正确！',
     type: 'warning',
     customClass:'black'
    });
    return;
   };

   const TIME_COUNT = 60;
     let _this = this;
     if (!this.timer) {
      this.count = TIME_COUNT;
      this.show = false;
      this.timer = setInterval(() => {
               if (_this.count > 0 && _this.count <= TIME_COUNT) {
       _this.count--;
      } else {
       _this.show = true;
       clearInterval(_this.timer);
       _this.timer = null;
      }
     }, 1000)
    }
    this.getverify();
   },

  getverify:function(){
     let data = {username:this.person.telephone}
     this.axios.post('/api//index/login/RegisterPhoneService.html',data).then((res)=>{
        if(res.data.code=='SUCCESS'){
         this.$message({
          message: '发送成功！',
          type: 'success',
          customClass:'black'
         });
        }else{
         this.$message({
          message: res.data.message,
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
       let data = {telephone:this.person.telephone,paypassword:this.password,verification:this.verification,}
       this.axios.post('/api/index/Retrieve/PaymentPasswordService.html',data).then((res)=>{
            if(res.data.code=='SUCCESS'){
            localStorage.setItem("TAINIUUID",res.data.data.id);
            localStorage.setItem("TAINIUROLER",res.data.data.rule_id);
            localStorage.setItem("TAINIUPERSON",JSON.stringify(res.data.data));
            this.$message({
             message: '设置成功！',
             type: 'success',
             customClass:'black'
            });
            this.$router.push({path:'/'});
           }else if(res.data.code=='DEAL_WITH_ERROR'){
             this.$message({
              message: '密码不能和原密码一样！',
              type: 'error',
              customClass:'black'
             });
            }else if(res.data.code=='PHONE_CODE_INEXISTENCE'){
             this.$message({
              message: '该手机号未注册！',
              type: 'error',
              customClass:'black'
             });
            }else if(res.data.code=='VERIFICATION_CODE_OVERDUE'){
             this.$message({
              message: '验证码已过期！',
              type: 'error',
              customClass:'black'
             });
            }else{
            this.$message({
             message:res.data.message,
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


 },
}
</script>

<style lang="scss" scoped>
 .headtopthis{
  width:100%;
  height:200px;
  background:url('../assets/logobg.jpg') no-repeat;
  background-size:100%;

 .topbox{
  padding:10px 20px;
 .left{
  float:left;
 a{
  color:#000;
 }
 }
 .right{
  float:right;
 a{
  color:#be2c21;
 }
 }
 }
 .logobox{
  margin:0 auto;
  width:100px;
 .logo{
  width:100px;
  height:100px;
 }
 h3{
  margin-top:160px;
  text-align:center;
  font-size:14px;
 }
 }
 }

 .form{
  padding:20px;
  box-sizing:border-box;
  font-size:14px;

 .linebox{
  display:flex;
  flex-direction: row ;
  align-items: center;
  justify-content: space-between;
  border-bottom:1px solid #f79c97;
 b{ font-size:16px; color:#000; width:30%; text-align:left;}
 span{color:#999; font-size:14px;}


 &.success{
   border-bottom-color:#ea1c10;
  }
  &.noborder{
  border:none;
   }
  p{
  line-height:40px;
   b{
    color:#a6a6a6;
    font-weight:normal;
   }
  }
 input{
  border:none;
  outline:none;
  width:70%;
  line-height:40px;
 }
 button{
  border:none;
  width:30%;
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

 .btnbox{
  padding:0 20px;
  box-sizing:border-box;
 .left{
  float:left;
 a{
  color:#cd2f23;
  font-size:14px;
 }
 }
 }

 .bigbtn{
  margin-top:100px;
  padding:0 20px;
  box-sizing:border-box;
 *{
  float:left;
  margin-right:4px;
 }
 input[type="checkbox"] {
  margin-top:4px;
  border:1px solid #2f2f2f;
  background: #fff;
  height: 16px;
  vertical-align: middle;
  width: 16px;
  outline:none;
 }
 input[type="checkbox"]:checked {

 }
 .note{
  font-size:14px;
  margin-bottom:10px;
 b{
  color:#2f2f2f;
  font-weight:normal;
 }
 a{
  color:#2f2f2f;
 }
 label{
  display:inline-block;
 }
 }

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
