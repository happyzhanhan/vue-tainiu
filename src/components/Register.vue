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
    <input type="number"  autofocus placeholder="请输入手机号码" v-model="username" />
   </div>
   <div class="linebox" :class="{'success':isSuccess2}">
    <input type="text" placeholder="请输入验证码" v-model="verification" />
     <button v-show="show" :class="{'success':isSuccess1}" :disabled="!isSuccess1" @click="getCode">获取验证码</button>
     <button v-show="!show">{{count}}秒后重发</button>
   </div>
   <div class="linebox" :class="{'success':isSuccess3}">
    <input type="password" autocomplete="new-password" placeholder="请输入密码" v-model="password" />
   </div>
   <div class="linebox "  :class="{'success':isSuccess4}">
    <input type="text" placeholder="推荐人ID，没有则默认为1公司" v-model="commendid"/>
   </div>
  </div>

  <!--<div class="btnbox">
   <span class="left"><router-link to="/register">账号密码注册</router-link></span>
  </div>-->


  <div class="bigbtn">
   <p class="note">
    <label for="input">
     <el-checkbox v-model="Checked" >我已阅读《泰牛订货协议》</el-checkbox>
    </label>
   </p>
   <button :class="{'success':isChecked}" :disabled="!isChecked" @click="postregister">注  册</button>
  </div>

 </div>
</template>

<script>
 const api = 'http://tainiu.yagou.com:8089';

 export default {
  name: 'Register',
  data () {
    return {
     isSuccess:false,
     isSuccess1:false,
     isSuccess2:false,
     isSuccess3:false,
     isSuccess4:false,
     isChecked:false,
     username:'',
     verification:'',
     password:'',
     commendid:1,
     Checked:false,
     timer:null,
     count:0,
     show:true,
    }
  },

  watch:{
   username:{
    handler:function(val,oldval){
     if(val){
      this.isSuccess=true;
      this.isSuccess1=true;
     }else{
      this.isSuccess=false;
      this.isSuccess1=false;
     }
    },
    deep:true
   },
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
   commendid:{
    handler:function(val,oldval){
     if(val){
      this.isSuccess4=true;
     }else{
      this.isSuccess4=false;
     }
    },
    deep:true
   },
   Checked:{
    handler:function(val,oldval){
     if(val){
      this.isChecked=true;
     }else{
      this.isChecked=false;
     }
    },
    deep:true
   },

  },
 computed:{

 },
 created:function(){
    this.gettid();
 },
  methods:{
   getCode:function(){

    var reg=/^1\d{10}$/;
    if(reg.test(this.telephone)){
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
   gettid:function(){
    if(this.$route.query.tid){
     this.commendid = this.$route.query.tid;
    }else{
     this.commendid = '';
    }
   },
   getverify:function(){
      let data = {username:this.username};
      let _this = this;
      this.axios.post('/index.php/index/login/RegisterPhoneService.html',data).then((res)=>{
        if(res.data.code=='SUCCESS'){
          this.$message({
           message: '发送成功！',
           type: 'success',
           customClass:'black'
          });
        }else{
          this.$message({
           message: '发送失败：'+res.data.message,
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

     postregister:function(){
       if(this.commendid =='' && this.commendid ==0 ){
        this.commendid = 1;
       }
        let data = {username:this.username,password:this.password,verification:this.verification,commend_id:this.commendid}
        this.axios.post('/index.php/index/login/RegisterService.html',data).then((res)=>{
            if(res.data.code=='SUCCESS'){
                 this.$message({
                  message: '注册成功！',
                  type: 'success',
                  customClass:'black'
                 });
                 this.$router.push({path:'/login'})
            }else if(res.data.code=='USERNAME_EXISTENCE'){
                 this.$message({
                  message: '号码已被注册！',
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
  margin-top:40px;
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
