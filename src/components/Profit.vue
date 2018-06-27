<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 10:24.
 -->

<template>
 <div class="profit">
   <div class="profithead">
      <tnhead :headname="headname"></tnhead>
      <h2>￥16588.00</h2>
      <p>账户余额</p>
      <router-link to="/withdrawal"><span>我要提现</span></router-link>
      <h5>累计结算利润：￥<b>1654655.0</b></h5>
   </div>
   <div class="tablehead">
     <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="first"> <span slot="label" style="margin:0 11px;">结算利润明细</span>
       <div class="detailtable">
        <el-table
                :data="tableData"
                style="width: 100%"
                height="350">
         <el-table-column
                 prop="date"
                 label="时间">
         </el-table-column>
         <el-table-column
                 prop="name"
                 label="名称">
         </el-table-column>
         <el-table-column
                 prop="money"
                 label="金额">
         </el-table-column>
         <el-table-column
                 prop="opration"
                 label="操作">
              <template slot-scope="scope">
               <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              </template>
         </el-table-column>
        </el-table>
       </div>
      </el-tab-pane>
      <el-tab-pane name="second"> <span slot="label" style="margin:0 11px;">提现明细</span>
       <div class="detailtable">
        <el-table
                :data="tableData2"
                style="width: 100%"
                height="350">
         <el-table-column
                 prop="date"
                 label="时间">
         </el-table-column>
         <el-table-column
                 prop="name"
                 label="名称">
         </el-table-column>
         <el-table-column
                 prop="money"
                 label="金额">
         </el-table-column>
         <el-table-column
                 prop="opration"
                 label="操作">
          <template slot-scope="scope">
           <el-button type="text" size="small">查看</el-button>
          </template>
         </el-table-column>
        </el-table>
       </div>
      </el-tab-pane>
      <el-tab-pane name="third"><span slot="label" style="margin:0 12px;">订购付款明细</span>
       <div class="detailtable">
        <el-table
                :data="tableData2"
                style="width: 100%"
                height="350">
         <el-table-column
                 prop="date"
                 label="时间">
         </el-table-column>
         <el-table-column
                 prop="name"
                 label="名称">
         </el-table-column>
         <el-table-column
                 prop="money"
                 label="金额">
         </el-table-column>
         <el-table-column
                 prop="opration"
                 label="操作">
          <template slot-scope="scope">
           <el-button type="text" size="small">查看</el-button>
          </template>
         </el-table-column>
        </el-table>
       </div>
      </el-tab-pane>
     </el-tabs>
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
    headname:'利润',
    activeName: 'first',
    tableData: [{
     date: '2016-05-02 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-01 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-03 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-01 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-03 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-01 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-03 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-01 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-03 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-01 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-03 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-01 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-03 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-01 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-03 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-01 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-03 14:50:30',
     name: '订单结算',
     money: '453.0'
    }],
    tableData2: [{
     date: '2016-05-02 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0'
    }],
    tableData3: [{
     date: '2016-05-02 14:50:30',
     name: '订单结算',
     money: '453.0'
    }, {
     date: '2016-05-04 14:50:30',
     name: '订单结算',
     money: '453.0',
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
 background:url('../assets/profitbg.png') no-repeat;
 background-size:100%;
 color:#fff;
 padding-top:6vh;
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
  padding-bottom:30px;
 }
}

 .tablehead{
 /* background:#fff;*/
  margin-top:5px;
  background:url('../assets/wbg.png') no-repeat;
  background-size:100%;
 }

 #tab-first{
  margin-left:30px!important;
 }

 .el-tabs__header{
  margin-bottom:0!important;
  background:#fff;
 }

 .el-tabs__item{
  padding:0 35px!important;
 }

 .detailtable{
  text-align:left;
 }
</style>