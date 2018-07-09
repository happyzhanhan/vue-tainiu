<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 10:24.
 -->

<template>
 <div class="profit">
   <div class="profithead">
      <tnhead :headname="headname"></tnhead>
      <h2>0.00</h2>
      <p>账户余额</p>
      <!--<router-link to="/withdrawal"><span>我要提现</span></router-link>
      <h5>累计结算利润：￥<b>0.0</b></h5>-->
   </div>
   <div class="tablehead">

    <div class="fixed">
     <div class="tabnav">
      <ul>
       <li :class="{'hover':showstatus ==''}" @click="showstatus='' ">充值明细</li>
       <li :class="{'hover':showstatus ==1}" @click="showstatus=1 ">订单付款明细</li>
      </ul>
     </div>
    </div>

    <div class="tabcontent">
     <div class="showno  animated fadeIn" v-if="datanumber==0 || datanumber==null">
      <img src="../assets/noimg.jpg" alt="空数据" width="50%" style="margin-top:50px;"/>
      <p>没有数据哦！~</p>
     </div>
     <table  v-if="datanumber!=0">
      <tr>
       <th width="40%">时间</th>
       <th>名称</th>
       <th>金额</th>
       <th>操作</th>
      </tr>
      <tr>
       <td>2018-10-05 15:60:50</td>
       <td>订单支付</td>
       <td>40.5</td>
       <td><a href="#">详情</a></td>
      </tr>
      <tr>
       <td>2018-10-05 15:60:50</td>
       <td>订单支付</td>
       <td>40.5</td>
       <td><a href="#">详情</a></td>
      </tr>
      <tr>
       <td>2018-10-05 15:60:50</td>
       <td>订单支付</td>
       <td>40.5</td>
       <td><a href="#">详情</a></td>
      </tr>
     </table>
    </div>

   </div>

  <div>

  </div>
 </div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
 export default {
  name: 'Profit',
  components:{tnhead},
  data ()  {
   return {
    headname:'账户余额',
    activeName: 'first',
    datanumber:0,
    showstatus:'',
    tableData: [{
       date: '2016-05-02 14:50:30',
       name: '订单结算',
       money: '453.0'
      }, {
       date: '2016-05-04 14:50:30',
       name: '订单结算',
       money: '453.0'
      }],
   }
  },
  methods: {
    handleClick(tab, event) {
     console.log(tab, event);
    }
  }
 }
</script>

<style lang="scss" scoped>
 .profit{
  background:#f2f2f2;
  height:100vh;
 }
.profithead{
 position:relative;
 width:100%;
 background:url('../assets/profitbg.png') #ff5134 no-repeat;
 background-size:100%;
 color:#fff;
 padding-top:50px;
padding-bottom:5px;
 h2{
  font-size:30px;
  line-height:40px;
  margin-top:20px;
 }
 p{
  font-size:12px;
  line-height:16px;
  margin-bottom:10px;
 }
 span{
  background:#fcebbd;
  border-radius:50px;
  padding:5px 30px;
  font-size:12px;
 }
 h5{
  margin-top:20px;
  padding-bottom:26px;
 }
}

 .tablehead{
 /* background:#fff;*/
  margin-top:5px;
  background-size:100%;
 }
 .tabnav{
  wiidth:100%;
  background:#fff;
 ul{
  width:100%;
  display:flex;
  flex-direction: row ;
  align-items: stretch;
  justify-content: space-around;
 li{
  width:50%;
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
 &:hover,&.hover{
           color:#f0160d;
 &:after{display:block;}
 }
 }
 }
 }

 .tabcontent{
  margin-top:5px;
  background:#f5f5f5;
 }

 .tabcontent{
  table{
   width:100%;
   line-height:30px;
   background:#fff;
   tr>td{
    border-top:1px solid #f5f5f5;
   }
  }
 }
</style>