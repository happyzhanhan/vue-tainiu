<!--
 * Created by happy<1659725767@qq.com> on 2018/6/22 17:58.
 -->

<template>
 <div class="login">
  <div class="headtop">
   <div class="topbox">
    <span class="left"><router-link to="/register">注册</router-link></span>

    <span class="right"><router-link to="/login">登录</router-link></span>
   </div>
   <div class="logobox">
    <h3>泰牛订货系统</h3>
   </div>
  </div>

  <div class="form">
   <div class="linebox" :class="{'success':isSuccess}">
    <input type="text"  autofocus placeholder="请输入手机号码"  @change="changeCss"/>
   </div>
   <div class="linebox" :class="{'success':isSuccess2}">
    <input type="text" placeholder="请输入验证码"   @change="changeCss2"/>
    <button :class="{'success':isSuccess}">获取验证码</button>
   </div>
   <div class="linebox" :class="{'success':isSuccess3}">
    <input type="text" placeholder="请输入订货推荐人ID，没有则默认为0" @change="changeCss3"/>
   </div>
  </div>

  <div class="btnbox">
   <span class="left"><router-link to="/register">账号密码注册</router-link></span>
  </div>


  <div class="bigbtn">
   <p class="note">
    <label for="input">
     <input id="input" type="checkbox" v-model="isChecked" @change="changeCss4"/>我已阅读《泰牛订货协议》
    </label>
   </p>
   <button :class="{'success':isChecked}">注  册</button>
  </div>

 </div>
</template>

<script>
 export default {
  name: 'Register',
  data () {
  return {
   isSuccess:false,
   isSuccess2:false,
   isSuccess3:false,
   isSuccess4:false,
   isChecked:false,
   show: true,
  }
 },
 methods:{
  changeCss(val) {
   if (val.target.value == "") {
    this.isSuccess = false;
   } else {
    this.isSuccess = true;
   }

  },
  changeCss2(val) {
   if (val.target.value == "") {
    this.isSuccess2 = false;
   } else {
    this.isSuccess2 = true;
   }
  },
  changeCss3(val) {
   if (val.target.value == "") {
    this.isSuccess3 = false;
   } else {
    this.isSuccess3 = true;
   }
  },
  changeCss4(val) {
   if (this.isChecked == false) {
    this.isSuccess4 = false;
   } else {
    this.isSuccess4 = true;
   }

  }
 }
 }
</script>

<style lang="scss" scoped>
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
  margin-top:140px;
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
