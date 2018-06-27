<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:59.
 -->

<template>
 <div class="send">
  <div class="sendhead">
   <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>

  </div>

  <div class="sendnone">

   <p class="tips">{{text}}</p>

   <div class="lineboxtext" @click="Toadresslist">
    <b>选择收货地址</b>
    <i class="el-icon-arrow-right"></i>
   </div>

   <!--<div class="location">
    <span>
     <i class="el-icon-location-outline"></i>
    </span>
    <span>
     <p><b>收货人：柯基</b><em>15088700456</em></p>
     <p>收货地址：浙江省杭州市江干区下沙13号大街53号</p>
    </span>
   </div>-->

   <div class="lineboxtext">
    <b>选择订货商品:</b>
   </div>

   <div class="productlist">
      <div class="onepro"  v-for="(pro,index) in product">
       <label :for="index">
          <div class="left">
           <span>
             <input type="radio" :id="index" name="product" :value="index" v-model="productid"/>
            </span>
            <span>
             <img :src="pro.pic_url" alt="">
            </span>
            <span class="productname">
             <p><b>产品:{{pro.pname}}</b></p>
              <p><b>规格：{{pro.format}}</b></p>
            </span>
          </div>

         <span class="price">
           <em>￥{{parseFloat(pro.product_price)*parseFloat(rule_price.product_price_rule)}}</em>
         </span>
       </label>
      </div>

   </div>

   <div class="numberline">
    <b>选择订货数量：(整10倍订购)</b>
    <el-input-number v-model="buynumber" size="mini" :min="0" :step='10' label="描述文字" :disabled="buyamount"></el-input-number>
   </div>

   <div class="tabblock" v-show="rule_id>4">
    <ul>
     <li><span><img src="../assets/money.png" alt=""></span>
     <span><p><b>预缴货款</b></p>
     <p><b>￥</b><em>{{rule_price.products_advance_payment}}</em></p></span></li>
     <li><span><img src="../assets/ensuran.png" alt=""></span>
     <span><p><b>保证金</b></p>
     <p><b>￥</b><em>{{rule_price.products_guarantee_money}}</em></p></span></li>
    </ul>
   </div>

   <div class="lineboxtext">
    <p>应付金额: <span class="pricebox"><b>￥</b><big>{{needpay}}</big></span></p>
   </div>

   <div class="btnbox mt-30">
    <button :class="{'success':issuccess}">下一步</button>
   </div>
  </div>
 </div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
 const api = 'http://tainiu.yagou.com:8089';
 export default{
  name:'Reserve',
  components:{tnhead},
  data(){
  return{
   headname:'泰牛订货系统',
   headstyle:'whitetop',
   text:"*您未开通订货资格，需要先支付保证金~",
   num1: 1,
   rule_id:1,
   rule_name:"区域代理",
   productid:0,
   buynumber:0,
   issuccess:false,
   product:{
       0:{
           pic_url:'../assets/product-01.jpg',
           pname:'泰国红牛(整箱)',
           format:'250ml*24瓶',
           product_price:200.0,
       }
   },
   rule_price:{
       product_price_rule:0.5,
       products_advance_payment:10000.0,
       products_guarantee_money:10000.0,
   },
   guranteeprice:0,
   locknumber:false,
  }
 },
 created:function(){
     this.getrolerid();
     this.getAjax();
 },
 watch:{
     needpay:{
         handler:function(val,oldval){
             if(val>0){
                 this.issuccess = true;
             }else{
                 this.issuccess = false;
             }
         },
         deep:true
     },
 },
 computed:{
     oneproprice:function(){
         return this.product[this.productid].product_price * parseFloat(this.rule_price.product_price_rule);
     },
     productprice:function(){
         let oneproprice = this.product[this.productid].product_price * parseFloat(this.rule_price.product_price_rule);
         return oneproprice * this.buynumber;
     },
     needpay:function(){
         if(this.rule_id=='5'||this.rule_id==5){
             return parseFloat(this.rule_price.products_advance_payment) + parseFloat(this.guranteeprice);
         }else{
             return parseFloat(this.productprice) + parseFloat(this.guranteeprice);
         }
     },
     buyamount:function(){
         if(this.rule_id=='5'||this.rule_id==5){
             this.buynumber = Math.floor(parseFloat(this.rule_price.products_advance_payment)/parseFloat(this.oneproprice));
             return true;
         }else{
             return false;
         }
     }
 },
 methods:{
     Toadresslist(){
         this.$router.push({path:'/adresslist'})
     },
     getrulename:function(id){
         switch(parseFloat(id)){                                            //角色： 0 新用户，1 区域代理，2 一级代理，3 二级代理，4 门店
             case 1:return '区域代理';
                 break;
             case 2:return '一级代理';
                 break;
             case 3:return '二级代理';
                 break;
             case 4:return '门    店';
                 break;
             default:return '新用户';
                 break;
         }
     },
     getrolerid(){
         if(localStorage.getItem("TAINIUROLER")=='null'|| typeof localStorage.getItem("TAINIUROLER") == "undefined" || localStorage.getItem("TAINIUROLER") == null || localStorage.getItem("TAINIUROLER") == ""){
             this.rule_id = 5;
         }else{
             this.rule_id = localStorage.getItem("TAINIUROLER");
         }
         console.log(this.$route.query.rule_id,this.rule_id);
     },
     getAjax:function () {
         let _this = this;
         let data = 0;
         let applyname = '';
         if(_this.rule_id=='5'||_this.rule_id==5){                                                 //新用户
             if(typeof (_this.$route.query.rule_id)=='undefined'){
                 _this.$message({
                     message: '未设置申请级别，请联系管理员！',
                     type: 'error',
                     customClass:'black',
                     duration:0,
                 });
                 _this.text = "未设置申请级别，请联系管理员！";

             }else {
                 data = {rule_id: parseFloat(this.$route.query.rule_id),}

                 applyname = this.getrulename(parseFloat(_this.$route.query.rule_id));

                 _this.text = "*您未开通[" + applyname + "]订货资格，需要先支付保证金~";

                 _this.getproduct(data);



             }
         }else{                                                                          //老用户
             data = {rule_id:this.rule_id,}

             this.rule_name = this.getrulename(parseFloat(this.rule_id));

             _this.text = "*您已经开通【"+this.rule_name+"】权限，马上下单吧！~";

             _this.getproduct(data);

             _this.guranteeprice = 0;
         }

    },
    getproduct:function(data){
        let _this = this;
        this.$http.post(api+'/index/product/ProductSelectService.html',data).then((res)=>{
            if(res.body.code=='SUCCESS'){
            _this.product = res.body.result.product;
            _this.rule_price=res.body.result.user_rule;
            _this.guranteeprice = _this.rule_price.products_guarantee_money;
            }
        },(res)=>{
             this.$message({
                 message: '系统错误！',
                 type: 'error',
                 customClass:'black'
             });
         })
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

 .sendnone{
    .productlist{
       .onepro label{
           display:flex;
           flex-direction: row ;
           align-items: center;
           justify-content: space-between;
           background:#fff;
           padding:20px;
           box-sizing:border-box;
           border-bottom:2px solid #fafafa;
           &:hover{
               background:#fafafa;
            }

          .left{
            display:flex;
            flex-direction: row ;
            align-items: center;
            justify-content: space-between;

            img{
             width:40px;
             height:40px;
             border:1px solid #f5f5f5;
             margin:0 10px;
            }
            .productname{
             text-align:left;
             p:nth-child(1){color:#000;font-weight:600;}
             p:nth-child(2){color:#a1a1a1;}
            }

          }
          .price{
           em{
            font-style:normal;
            color:#ef1d12;
            font-size:14px;
            font-weight:600;
           }

          }

       }
    }
 }

 .tabblock{
  background:#fff;
  margin-bottom:10px;

  ul{
   display:flex;
   flex-direction: row ;
   align-items: center;
   justify-content: flex-start;
   li{
    display:flex;
    flex-direction: row ;
    align-items: center;
    justify-content: space-between;
    padding:20px 10px;
    box-sizing:border-box;

   &:nth-child(1){
        padding-right:30px;
        position:relative;

        &:after{
        position:absolute;
          top:10px;
          right:10px;
        content:"";
        display:inline-block;
        width:1px;
        height:70px;
        background:#f5f5f5;
         }
    }

    span{
       &:nth-child(1){
         width:30px;
         margin-right:5px;
        }
       img{width:20px;}
    }
    p{
     text-align:left;
     &:nth-child(1){color:#808080;}
     &:nth-child(2){color:#000;}
     b{
      font-size:14px;
     }
     em{
      font-size:18px;
      font-style:normal;
     }
    }
   }
  }
 }

 .numberline{
   background:#fff;
   display:flex;
   flex-direction: row ;
   align-items: center;
   justify-content: space-between;
   padding:10px 20px;
   box-sizing:border-box;
   margin:10px 0;
 }

 .pricebox{
  b{color:#e81b0f;  font-weight:bold;}
  big{color:#e81b0f;font-size:20px; font-weight:bold;}
 }

 .location{
  background:#fff;
 }
</style>