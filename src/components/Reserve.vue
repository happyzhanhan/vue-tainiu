<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:59.
 -->

<template>
 <div class="send">
     <transition name="showposter">
     <div class="posterbox animated fadeIn" :class="{'fadeOut':showposter == false}" v-show="showposter"  transiton="showposter">
         <div class="postertop"  @click="hiddenposter">
             <div>
                 <img src="../assets/poster03.png" draggable="false" @click.prevent="(()=>{return false})"  oncontextmenu="return false;" onselectstart="return false;"  width="100%" class="animated fadeInDown" :class="{'fadeOutUp':showposter == false}"  alt="">
                 <button class="animated pulse" :class="{'fadeOutUp':showposter == false}">立即订购 >></button>
             </div>
         </div>
         <div class="posterunder"  @click="hiddenposter">
             <div>
                 <img src="../assets/poster04.png" draggable="false" @click.prevent="(()=>{return false})"  oncontextmenu="return false;" onselectstart="return false;"  width="100%" class="animated fadeInUp" :class="{'fadeOutDown':showposter == false}"  alt="">
                 <button class="animated pulse" :class="{'fadeOutDown':showposter == false}">立即订购 >></button>
             </div>
         </div>
     </div>
     </transition>

     <div class="passwordbox animated fadeIn" v-if="showgrybox==true" >
         <div class="kongblock " @click="showgrybox = false,showpay=true">

         </div>
         <div class="passwordselectbox animated fadeInUp">
             <div class="partone" v-show="showpay==true">
                 <h4 class="alerttitle"><b>确认支付</b><i class="el-icon-close" @click="showgrybox = false"></i></h4>
                 <div class="postpasswordbox">
                    <h2>￥{{needpay}}</h2>
                    <p><b>订单名称</b><em>{{this.product[this.productId].name}}…</em></p>
                    <p @click="showpay=false"><b>付款方式</b><em>{{switchwallettype(type)}} <i class="el-icon-arrow-right"></i></em></p>

                     <div class="linebox">
                         <label for="name">支付密码：</label>
                         <input type="password" autofocus placeholder="请填写支付密码" v-model="paypassword"/>
                         <span><i class="el-icon-question" @click="Toforgetpassword"></i></span>
                     </div>

                     <div class="btnbox mt-30 bottom20">
                         <button :class="{'success':issuccess}" @click="postorder" :disabled="!issuccess">立即付款</button>
                     </div>
                 </div>
             </div>
             <div class="parttwo "  v-if="showpay==false">
                 <h4 class="alerttitle" @click="showpay=true" ><i class="el-icon-arrow-left"></i><b>选择支付钱包</b></h4>
                 <div class="postpasswordbox">

                     <p @click="type='BALANCE',showpay= true"><b><img src="../assets/money.png" alt="" width="20px"> 账户余额</b><em><i v-if="type=='BALANCE'" class="el-icon-check"></i></em></p>

                     <p @click="type='PAYMENT_FOR_GOODS',showpay= true"><b><img src="../assets/money.png" alt="" width="20px"> 货款余额</b><em><i v-if="type=='PAYMENT_FOR_GOODS'" class="el-icon-check"></i></em></p>

                     <p @click="type='PROFIT',showpay= true"><b><img src="../assets/money.png" alt="" width="20px"> 利润余额</b><em><i v-if="type=='PROFIT'" class="el-icon-check"></i></em></p>

                 </div>
             </div>
         </div>
     </div>


  <div class="sendhead">
   <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>

  </div>

  <div class="sendnone">

   <p class="tips">{{text}}</p>

   <div class="lineboxtext" @click="Toadresslist" v-if="!addressshow">
    <b>选择收货地址</b>
    <i class="el-icon-arrow-right"></i>
   </div>

   <div class="location" @click="Toadresslist" v-if="addressshow">
       <p v-for="ad in address">
          <span>
             <i class="el-icon-location-outline"></i>
            </span>
            <span>
             <p><b>收货人：{{ad.fullname}}</b><em>{{ad.phone}}</em></p>
             <p>收货地址：{{ad.address_system}}{{ad.address_detail}}</p>
            </span>
       </p>

   </div>

   <div class="lineboxtext">
    <b>选择订货商品:</b>
   </div>

   <div class="productlist">
      <div class="onepro"  v-for="(pro,index) in product">
       <label :for="index">
          <div class="left">
           <span>
             <input type="radio" :id="index" name="product" :value="index"  v-model="productId"/>
            </span>
            <span>
             <img :src="pro.pic_url" alt="">
            </span>
            <span class="productname">
             <p><b>产品：{{pro.name}}</b></p>
              <p><b>规格：{{pro.sub_name}}</b></p>
            </span>
          </div>

             <span class="price">
                  <s>￥{{pro.product_price}}</s>
                 <em >￥{{pro.rule_price}}</em>
             </span>
       </label>
      </div>

   </div>

   <div class="numberline">
    <b>选择订货数量：</b>
    <el-input-number v-model="buynumber" size="mini" :min="50" :step='1' label="描述文字" ></el-input-number>
   </div>

  <!-- <div class="tabblock" v-show="rule_id>4">
    <ul>
     <li><span><img src="../assets/money.png" alt=""></span>
     <span><p><b>预缴货款</b></p>
     <p><b>￥</b><em>{{rule_price.products_advance_payment}}</em></p></span></li>
     <li><span><img src="../assets/ensuran.png" alt=""></span>
     <span><p><b>保证金</b></p>
     <p><b>￥</b><em>{{rule_price.products_guarantee_money}}</em></p></span></li>
    </ul>
   </div>
-->
   <div class="lineboxtext">
    <p>应付金额：<span class="pricebox"><b>￥</b><big>{{needpay}}</big></span></p>
   </div>


   <div class="btnbox mt-30">
    <button :class="{'success':true}" @click="showgrybox = true">下 单</button>
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
   showgrybox:false,
      showpay:true,
      type:'BALANCE',

      showposter:true,

   num1: 1,
   uid:0,
   rule_id:1,
   commend_id:0,
   rule_name:"区域代理",
   productId:0,
   buynumber:0,
   issuccess:false,
      isSuccess2:false,
      paypassword:'',

    addressshow:false,
    address:{

    },
   product:{
       0:{
           add_time:null,
           delete_time:null,
           id:1,
           is_delete:"0",
           mark:null,
           name: "泰国红牛（整箱）",
           pic_url:"http://33mimg.oss-cn-hangzhou.aliyuncs.com/tainiu%2Fproduct-01.jpg",
           product_price :"120.00",
           profit: "1.00",
           seller_id:0,
           sub_name:"规格: 250ml*24瓶",
       },
        1:{
             add_time:null,
             delete_time:null,
             id:1,
             is_delete:"0",
             mark:null,
             name: "泰氏椰汁（整箱）",
             pic_url:"http://33mimg.oss-cn-hangzhou.aliyuncs.com/tainiu%2Fproduct-02.jpg",
             product_price :"120.00",
             profit: "1.00",
             seller_id:0,
             sub_name:"规格: 500ml*8瓶",
         }
   },
      product_rule:{

      },
  }
 },
 created:function(){
     this.getrolerid();
     this.getproduct();
     this.getaddress();
 },
 watch:{
     paypassword:function(val,oldval){
         if(val){
             this.issuccess = true;
             this.isSuccess2 = true;
         }else{
             this.issuccess = false;
             this.isSuccess2 = false;
         }
     }
 },
 computed:{
     text:function(){
         return "您已开通【"+this.getrulename(this.rule_id)+"】权限，赶紧来下单吧！"
     },
     needpay:function(){
         return parseFloat(this.product[this.productId].rule_price)*this.buynumber;
     },
 },
 methods:{
     Toadresslist(){
         this.$router.push({path:'/adresslist'})
     },
     Toforgetpassword(){
         this.$router.push({path:'/forgetpaypassword'})
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
     hiddenposter:function(){
         this.showposter = false;
     },
     switchwallettype:function(type){
         switch(type){
             case 'BALANCE':return '账户余额';
                break;
             case 'PAYMENT_FOR_GOODS':return '货款余额';
                 break;
             case 'PROFIT':return '利润余额';
                 break;
             dafult :return '未知';
                 break;
         }
     },
     getrolerid(){
         let persondata=JSON.parse(localStorage.getItem("TAINIUPERSON"));
         //console.log(persondata['id']);
         if(persondata){
             this.uid =  persondata['id'];
         }else{
             this.$router.push({path:'/login'})
         }
         if(localStorage.getItem("TAINIUROLER")=='null'|| typeof localStorage.getItem("TAINIUROLER") == "undefined" || localStorage.getItem("TAINIUROLER") == null || localStorage.getItem("TAINIUROLER") == ""){
             this.rule_id = 5;
             this.$router.push({path:'/login'});
         }else{
             this.rule_id = localStorage.getItem("TAINIUROLER");
             this.commend_id= persondata['commend_id'];
         }
         //console.log(this.$route.query.rule_id,this.rule_id);
     },
     getproduct:function(){
             let _this = this;
             let data = {rule_id:this.rule_id};
             this.axios.post('/index.php/index/Product/ProductSelectService.html',data).then((res)=>{
                 if(res.data.code=='SUCCESS'){
                 _this.product = res.data.data.product.rows;
             }else if(res.data.data == 'LOGIN_TAINIU_ERROR'){
                 this.$message({
                     message: '登录超时，请重新登录',
                     type: 'error',
                     customClass:'black'
                 });
                 this.$router.push({path:'/login'});
             }else{
                 this.$message({
                     message: '错误：'+res.data.message,
                     type: 'error',
                     customClass:'black'
                 });
             };
         },(res)=>{
             this.$message({
                 message: '系统错误！',
                 type: 'error',
                 customClass:'black'
             });
         })
     },
    getaddress:function(){
        let _this = this;
        let data = {uid:this.uid,default_addr:'1',addr_type:'0'};
        this.axios.post('/index.php/index/Address/AddressSelectService.html',data).then((res)=>{
            if(res.data.code=='SUCCESS'){
                if(res.data.data.total>0){
                    _this.addressshow = true;
                    _this.address = res.data.data.rows;
                }else if(res.data.code == 'LOGIN_TAINIU_ERROR'){
                    this.$message({
                        message: '登录超时，请重新登录',
                        type: 'error',
                        customClass:'black'
                    });
                    _this.$router.push({path:'/login'});
                }else{
                    _this.addressshow = false;

                }
            }else{
                this.$message({
                    message: '错误：'+res.data.message,
                    type: 'error',
                    customClass:'black'
                });
            };
        },(res)=>{
             this.$message({
                 message: '系统错误！',
                 type: 'error',
                 customClass:'black'
             });
         })
    },
     postorder:function(){
         let _this = this;
         console.log(this.address!=null);
         console.log(this.address!={});
         console.log(this.address>0);
         if(this.addressshow){
                     let data = {
                         product_id:this.product[this.productId].id,
                         uid:this.uid,
                         rule_id:this.rule_id,
                         product_amount:this.buynumber,
                         commend_id:this.commend_id,
                         name:this.product[this.productId].name,
                         sub_name:this.product[this.productId].sub_name,
                         paypassword:this.paypassword,
                         rule_id:this.rule_id,
                         consignee:this.address[0].fullname,
                         consignee_system_address:this.address[0].address_system,
                         consignee_detail_address:this.address[0].address_detail,
                         consignee_phone:this.address[0].phone,
                         area3_code:this.address[0].area3_code,

                     };
                     this.axios.post('/index.php/index/Oder/OderGenerateService.html',data).then((res)=>{
                         if(res.data.code=='SUCCESS'){
                         this.$message({
                             message: '订单提交成功！',
                             type: 'success',
                             customClass:'black'
                         });
                         this.$router.push({path:'/order'});
                     }else{
                         this.$message({
                             message: '错误：'+res.data.message,
                             type: 'error',
                             customClass:'black'
                         });
                     };
                 },(res)=>{
                     this.$message({
                         message: '系统错误！',
                         type: 'error',
                         customClass:'black'
                     });
                 })
         }else{
             this.$message({
                 message: '地址未填写？',
                 type: 'error',
                 customClass:'black'
             });
             return ;
         }

     },


 }

 }
</script>

<style lang="scss" scoped>
    .none{
        display:none;
    }
    .pulse{
        animation-iteration-count:infinite;
    }
    .showposter-enter-active, .showposter-leave-active {
        transition: opacity .5s
    }
    .showposter-enter, .showposter-leave-active {
        opacity: 0
    }
    .posterbox{
        background: #ee312d;
        position: fixed;
        top:0;
        z-index: 999999999;
        left:0;
        width: 100%;
        height:100vh;
        overflow: hidden;
        .postertop{
            position: fixed;
            top:0;
            z-index: 999999999;
            img{pointer-events: none;}
            div{
                position: relative;
                button{
                    border:none;
                    outline:none;
                    background:#ed322d;
                    padding:5px 10px;
                    font-size: 14px;
                    line-height:16px;
                    border-radius: 5px;
                    color:#fff;
                    text-align: center;
                    position: absolute;
                    z-index:99999999999999;
                    right:10px;
                    bottom:110px;
                }
            }
        }
        .posterunder{
            position: fixed;
            bottom:0;
            z-index: 999999999;
            img{pointer-events: none;}
            div{
                position: relative;
                button{
                    border:none;
                    outline:none;
                    background:#ed322d;
                    padding:5px 10px;
                    font-size: 14px;
                    line-height:16px;
                    border-radius: 5px;
                    color:#fff;
                    text-align: center;
                    position: absolute;
                    z-index:99999999999999;
                    left:10px;
                    top:70px;
                }
            }
        }
    }

    @-moz-keyframes zuo /* Firefox */
    {
        from {transform: translate(100vw,0);}
        to {transform: translate(0,0);}
    }

    @-moz-keyframes you /* Firefox */
    {
        from {transform: translate(0,0);}
        to {transform: translate(100vw,0);}
    }

    .passwordbox{
        width:100%;
        height:100vh;
        background:rgba(0,0,0,.6);
        position:fixed;
        top:0;
        z-index:999;

        .partoneani{
            animation:zuo 1s infinite;
        }
        .parttwoani{
            animation:you 1s infinite;
        }

        .kongblock{
            position:fixed;
            top:0;
            z-index:9999;
            width:100%;
            height:50vh;
        }

        .passwordselectbox{
            position:fixed;
            bottom:0;
            z-index:9999;
            width:100%;
            height:50vh;
            overflow-y:hidden;
            background:#fff;

            .alerttitle{
                position:relative;
                line-height:30px;
                font-size:12px;
                color:#666;
                border-bottom:1px solid #eee;
                i.el-icon-close{position:absolute;top:5px;right:10px;;z-index:9; font-size:18px;}
                i.el-icon-arrow-left{position:absolute;top:5px;left:10px;;z-index:9; font-size:18px;}
            }
            .postpasswordbox{
                box-sizing: border-box;
                padding:35px 12px;
                display:block;
                height:50vh;
                margin-top:-30px;
                 h2{font-size: 24px;}
                p{
                    display: flex;
                    flex-direction: row;
                    justify-items: space-between;
                    align-items:center;
                    width: 100%;
                    box-sizing: border-box;
                    padding:0 20px;
                    line-height:40px;
                    border-bottom:1px solid #eee;
                    b,em{display: inline-block; width: 50%;}
                    b{
                        float: left;
                        text-align: left;
                        img{
                            line-height: 40px;
                            margin-top:10px;
                            margin-right:10px;
                        }
                    }
                    em{
                        float: right;
                        text-align: right;
                    }
                    i.el-icon-check{
                        color:green;
                    }

                }
                .bottom20{
                    margin-bottom:20px;
                    margin-top:20px;
                }
            }
        }
    }

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
        margin-top:5px;

    .el-icon-success{
    &.success{
         color:rgb(19, 206, 102);
     }
    }

    em{
        font-style:normal;
        color:#a4a4a4;
    }
    label{width:85px; text-align:left; font-size:14px;
    &.w100{width:100px;}
    }
    input{width:60%; text-indent:14px;}
    h6{
        width:80%;
        text-align:left;
        line-height:20px;
        color:#666;
        box-sizing:border-box;
        padding-left:20px;
        font-size:14px;
    }
    span{
    width:20%;

    i{
        float:right;
        margin-left:20px;
        color:#f4f4f4;
    &.el-icon-arrow-right{
         color:#a5a5a5;
         font-size:20px;
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

 .send{
  position:relative;
  min-height:94vh;
  padding-top:50px;
  background:#f5f5f5;
 }

 .el-icon-question{
     color:red!important;
     font-size: 20px;
     float: right;
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
             font-size:12px;
             p:nth-child(1){color:#000;font-weight:600;}
             p:nth-child(2){color:#a1a1a1;}
            }

          }
          .price{
          width:20%;
          s{color:#999; width: 100%;}
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
   margin:5px 0;
 }

 .pricebox{

  b{color:#e81b0f;  font-weight:bold;}
  big{color:#e81b0f;font-size:20px; font-weight:bold;}
 }

 .location{
  background:#fff;
     margin-bottom:5px;
 }

    .fadeIn{
        transition-delay: 0s!important;
        -webkit-animation-delay:0s!important;
    }
</style>