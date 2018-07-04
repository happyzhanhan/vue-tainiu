<!--
 * Created by happy<1659725767@qq.com> on 2018/6/22 17:58.
 -->

<template>
 <div class="login">
  <div class="headtop">
   <div class="topbox">
    <span class="left"><router-link to="/login">登录</router-link></span>

    <span class="right"><router-link to="/register">注册</router-link></span>
   </div>
   <div class="logobox">
    <h3>泰牛订货系统</h3>
   </div>
  </div>

  <div class="form">
   <div class="linebox" :class="{'success':isSuccess}">
    <input type="text"  autofocus placeholder="请输入用户名/手机号" v-model="username" />
   </div>
   <div class="linebox" :class="{'success':isSuccess2}">
    <input type="password" placeholder="请输入密码" v-model="password" />
   </div>

  </div>

  <div class="btnbox">
   <span class="left"><router-link to="/forgetpassword">忘记密码？</router-link></span>
  </div>


  <div class="bigbtn">
   <button :class="{'success':isChecked}" :disabled="!isChecked" @click="getAjax">登  录</button>
  </div>

 </div>
</template>

<script>
 const api = 'http://tainiu.yagou.com:8089';
 export default {
  name: 'Login',
  data () {
  return {
   isSuccess:false,
   isSuccess2:false,
   isChecked:false,
   show: true,
   username:'',
   password:'',
  }
 },
 watch:{
  password:{
   handler:function(val,oldval){
      if(val){
       this.isSuccess2=true
        this.isChecked=true
      }else{
       this.isSuccess2=false
       this.isChecked=false
      }
   },
   deep:true
  },
  username:{
   handler:function(val,oldval){
    if(val){
     this.isSuccess=true
    }else{
     this.isSuccess=false
    }
   },
   deep:true
  }
 },

 methods:{

  getAjax:function () {
   let data = {username:this.username,password:this.password}   //{username:'Who123',password:'3891265'}
   this.axios.post('/api/index/user/LoginService.html',data).then((res)=>{
       console.log(res);
        if(res.data.code=='SUCCESS'){
        localStorage.setItem("TAINIUUID",res.data.data.id);
        localStorage.setItem("TAINIUROLER",res.data.data.rule_id);
        localStorage.setItem("TAINIUPERSON",JSON.stringify(res.data.data));
        this.$message({
           message: '恭喜你，登录成功！',
           type: 'success',
           customClass:'black'
          });
          this.$router.push({path:'/'})
        }else if(res.data.code=='LOGIN_TAINIU_PASSWORD'){
          this.$message({
           message: '密码错误！',
           type: 'error',
           customClass:'black'
          });
        }else if(res.data.code=='PARAM_ERROR'){
           this.$message({
            message: '参数错误！',
            type: 'error',
            customClass:'black'
           });
        }else if(res.data.code=='USERNAME_NOT_EXIST'){
           this.$message({
            message: '用户名不存在！',
            type: 'error',
            customClass:'black'
           });
        }else if(res.data.code=='PHONE_CODE_INEXISTENCE'){
           this.$message({
            message: '该账号未注册！',
            type: 'error',
            customClass:'black'
           });
        }else{
           this.$message({
            message: '请求错误:'+res.data.message,
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
  }


 }
 }
</script>

<style lang="scss" scoped>
 .black{
  width:200px!important;
  min-width:200px!important;
  top:500px!important;
 }
 .headtop{
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
