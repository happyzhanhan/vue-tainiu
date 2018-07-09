<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:58.
 -->

<template>
<div class="send">
 <div class="sendhead">
  <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
 </div>

 <div class="paidian">
    <div class="fixed">
     <p class="tips">*您有新的派单，请尽快发货哦！~</p>
     <div class="tabnav">
      <ul>
       <li :class="{'hover':showstatus ==''}" @click="showstatus='' ">全部订单</li>
       <li :class="{'hover':showstatus =='PAY_WAIT_TAKE'}" @click="showstatus='PAY_WAIT_TAKE' ">待接单</li>
       <li :class="{'hover':showstatus =='TAKE_WAIT_SEND'}" @click="showstatus='TAKE_WAIT_SEND' ">待发货</li>
      </ul>
     </div>
    </div>

  <div class="showno  animated fadeIn" v-if="ordernumber==0 || ordernumber==null">
   <img src="../assets/noimg.jpg" alt="空数据" width="50%" style="margin-top:100px;"/>
   <p>没有数据哦！~</p>
  </div>

    <div class="tabcontent" v-for="order in orderlist">
        <div v-if="order.status==showstatus || showstatus==''">
                   <div class="top">
                    <span>
                     <p>订单编号：{{order.trade_number}}</p>
                     <p>下单时间：{{order.add_time}}</p>
                    </span>
                    <span>
                     <b>{{switchstatus(order.status)}}</b>
                    </span>
                   </div>
                 <div class="product">
                  <span><img :src="order.product_pic_url" alt=""/></span>
                    <span>
                     <p><b>{{order.trade_name}}</b><em>￥{{order.product_price}}</em></p>
                     <p><b>数量：×{{order.product_amount}}</b><em></em></p>
                    </span>
                 </div>
                 <div class="location" >
                    <span>
                     <i class="el-icon-location-outline"></i>
                    </span>
                    <span>
                     <p><b>收货人：{{order.consignee}}</b><em>{{order.consignee_phone}}</em></p>
                     <p>收货地址：{{order.consignee_system_address}}{{order.consignee_detail_address}}</p>
                    </span>
                 </div>
                 <div class="moneyall">
                  共{{order.product_amount}}件商品，收货款金额￥ <big>{{order.amount_pay}}</big>
                 </div>
                   <div class="btnline">
                    <button v-if="order.status=='PAY_WAIT_TAKE'" class="red" @click="confirmTake(order.trade_number)">立即接单</button>
                    <button v-if="order.status=='TAKE_WAIT_SEND'" class="red" @click="confirmSend(order.trade_number)">立即发货</button>
                    <button v-if="order.status=='TAKE_WAIT_SEND'" @click="OderRefuseService(order.trade_number)">发不了货</button>
                   </div>
           </div>
    </div>
</div>

</div>



</div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
export default{
 name:'Send',
 components:{tnhead},
 data(){
  return{
   headname:'我的派单',
   headstyle:'whitetop',
   uid:1,
   ordernumber:0,
   showstatus:'',
   orderlist:{

   },
   showstatus:'',

  }
 },
 created:function(){
  this.getuid();
  this.getallorderlist();
 },
 methods:{
  tosendnone:function(){
   this.$router.push({path:'/sendnone'})
  },
  tosendproduct:function(){
   this.$router.push({path:'/sendproduct'})
  },
  getuid(){
   let persondata=JSON.parse(localStorage.getItem("TAINIUPERSON"));
   //console.log(persondata['id']);
   if(persondata){
    this.uid =  persondata['id'];
   }else{
    this.$router.push({path:'/login'})
   }
  },
  /*
   * 状态:
   WAIT_PAY 待付款,
   PAY_WAIT_TAKE 已付款待接单,
   TAKE_WAIT_SEND已接单待发货,
   SEND_WAIT_RECEIVE 已发货待收货,
   RECEIVE_PAYFOR_SELLER 已收货待结算货款, 给卖家结算货款，给推荐人结算利润，
   FINISH 订单完成，
   CANCEL 订单被取消
   *
   * */
  switchstatus:function(status){
   switch(status){
    case 'WAIT_PAY':return '未付款';
     break;
    case 'PAY_WAIT_TAKE':return '待接单';
     break;
    case 'TAKE_WAIT_SEND':return '待发货';
     break;
    case 'SEND_WAIT_RECEIVE':return '待收货';
     break;
    case 'RECEIVE_PAYFOR_SELLER':return '已完成';
     break;
    case 'FINISH':return '已关闭';
     break;
    case 'CANCEL':return '订单被取消';
     break;
    default: return '未知';
     break;
   }
  },

  getallorderlist:function(){
     let _this = this;
     let data = {uid:this.uid,};
     this.axios.post('/index.php/index/oder/OderSellerListService.html',data).then((res)=>{
      if(res.data.code=='SUCCESS'){
      console.log(res.data);
      _this.orderlist = res.data.data;
      _this.ordernumber = res.data.arr_length;
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
 confirmTake:function(number){
      let _this = this;
      let data = {trade_number:number};

      this.$confirm('请尽快接单，接单后24小时内联系买家给他发货！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {

        this.axios.post('/index.php/index/Oder/OderReceiptService.html',data).then((res)=>{
            if(res.data.code=='SUCCESS'){
                  this.$message({
                   type: 'success',
                   message: '接单成功!',
                   customClass:'black'
                  });
                _this.getallorderlist(); //刷新数据
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

     }).catch(() => {
             this.$message({
                     type: 'info',
                     message: '已取消',
                     customClass:'black'
             });
     });
 },
 confirmSend:function(number){
        let _this = this;
        let data = {trade_number:number};

        this.$confirm('确认已经到达买家，当面派单签收成功？', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         type: 'warning'
        }).then(() => {

               this.axios.post('/index.php/index/Oder/OderSendService.html',data).then((res)=>{
                    if(res.data.code=='SUCCESS'){
                          this.$message({
                           type: 'success',
                           message: '发货成功!',
                           customClass:'black'
                          });
                          _this.getallorderlist(); //刷新数据
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

       }).catch(() => {
        this.$message({
                type: 'info',
                message: '已取消',
                customClass:'black'
               });
       });
 },
 OderRefuseService:function(number){
     let _this = this;
     let data = {trade_number:number};

     this.$confirm('请谨慎操作，拒绝后将由公司另外指派？', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         type: 'warning'
     }).then(() => {

         this.axios.post('/index.php/index/Oder/OderRefuseService.html',data).then((res)=>{
         if(res.data.code=='SUCCESS'){
         this.$message({
             type: 'success',
             message: '拒绝成功!',
             customClass:'black'
         });
         _this.getallorderlist(); //刷新数据
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

 }).catch(() => {
     this.$message({
             type: 'info',
             message: '已取消',
             customClass:'black'
         });
 });
 },




 }

}
</script>

<style lang="scss" scodep>
.send{
 position:relative;
 min-height:94vh;
 padding-top:6vh;
 background:#f5f5f5;
}
/*
.fixed{
 position:fixed;
 top:0;
 z-index:2;
}*/
 .paidian{
 width:100%;
  .tabnav{
  width:100%;
   ul{
   width:100%;
   display:flex;
    flex-direction: row ;
    align-items: stretch;
    justify-content: space-around;
    li{
     width:33.33%;
     line-height:40px;
     background:#fff;
     font-weight:600;
     position:relative;

     &:before{
      content:"";
      position:absolute;
      width:1px;
      height:30px;
      display:block;
      background:#f5f5f5;
      right:0;
      top:5px;
      }
     &:after{
       content:'';
       position:absolute;
       bottom:0;
       left:50%;
       margin-left:-50px;
       width:100px;
       height:2px;
       background:#f0160d;
       display:none;
      }
      &:last-child{
       &:before{
        display:none;
       }
      }
      &.hover{
       color:#f0160d;
        &:after{display:block;}
      }
    }
   }
  }
 }

.tabcontent{
margin-top:4px;
background:#fff;
 .top{
  display:flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  text-align:left;
  padding:10px;
  box-sizing:border-box;
  border-bottom:1px solid #f4f4f4;
  p{color:#676767;font-size:10px;line-height:20px;}
  b{color:red;}
 }
 .product{
  margin-top:3px;
  background:#fafafa;
  display:flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  padding:10px;
  box-sizing:border-box;

   span{
     display:block;
    &:nth-child(1){
      width:20%;
   img{
    border:1px solid #e2e2e2;
   }
     }
    &:nth-child(2){
      width:80%;
     }
     img{
      width:40px;
      height:40px;
     }
     p{
     width:100%;
     display:inline-block;
     &:nth-child(1){
      color:#000;
      font-weight:600;
      font-size:14px;
      }
      &:nth-child(2){
       color:#a1a1a1;
       font-size:10px;

       }
     b{float:left;}
     em{
       float:right;
       text-align:right;
      font-style:normal;
      }
     }
   }
 }
 .location{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing:border-box;
  padding:10px;
 border-bottom:1px solid #f4f4f4;
 color:#676767;

  span{
   text-align:left;
   font-size:14px;
   p{
     b{
      text-align:left;
     }
     em{
      float:right;
      font-style:normal;
     }
   }

   &:nth-child(1){
     width:20%;
     text-align:center;
     i{
      font-size:20px;
      text-align:center;
     }
   }
   &:nth-child(2){
     width:80%;
     float:left;
     text-align:left;
    }
  }
 }
 .moneyall{
  line-height:40px;
  text-align:right;
  padding:0 10px;
 border-bottom:1px solid #f4f4f4;
  big{
   font-weight:600;
  }
 }
 .btnline{
 width:100%;
 height:40px;
 padding:0 10px;
 box-sizing:border-box;
  button{
   border:none;
   outline:none;
   border-radius:50px;
   padding:5px 10px;
   margin-top:6px;
   font-size:12px;
   border:1px solid #414547;
   color:#414547;
   background:#fff;
   float:right;
   display:inline-block;
   margin-left:10px;
   &.red{
     border:1px solid #f40000;
     color:#f40000;
     background:#fff;
    }
  }
 }
}
</style>