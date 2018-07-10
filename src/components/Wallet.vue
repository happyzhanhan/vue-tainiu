<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 10:24.
 -->

<template>
    <div class="profit">
        <div class="profithead">
            <tnhead :headname="headname"></tnhead>
            <router-link to="/balance">
                <h2>{{balance.money}}</h2>
                <p>账户余额(元)</p>
            </router-link>
            <!--<router-link to="/withdrawal"><span class="btnyellow">我要提现</span></router-link>-->
            <p class="bzjshow" v-if="bzj.money>0"><img src="../assets/bzj.png" alt="" width="14px" style="margin-right: 5px;"/>已缴纳保证金：{{bzj.money}}</p>
            <div class="listall">
                <div class="part">
                    <router-link to="/earnings">
                        <span><img src="../assets/wallet.png" alt=""></span>
            <span>
                <p>货款余额</p>
                <p><b>￥</b><em>{{goodspayment.money}}</em></p>
            </span>
                    </router-link>
                </div>
                <div class="part">
                    <router-link to="/profit">
                        <span><img src="../assets/icon-moneymore.png" alt=""></span>
             <span>
                 <p>利润余额</p>
                 <p><b>￥</b><em>{{profit.money}}</em></p>
             </span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="tablehead">

            <div class="fixed">
                <div class="tabnav">
                    <ul>
                        <li :class="{'hover':showstatus ==''}" @click="showstatus='' ">余额明细</li>
                        <li :class="{'hover':showstatus ==1}" @click="showstatus=1 ">货款明细</li>
                        <li :class="{'hover':showstatus ==4}" @click="showstatus=4 ">利润明细</li>
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
            headname:'我的钱包',
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
            }


        }
    },
    created:function(){
        this.getAjaxwallet();
    },
    methods: {
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


                    }else if(res.data.data == 'LOGIN_TAINIU_ERROR'){
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
    }
    }
</script>

<style lang="scss" scoped>
    .profit{
        background:#f2f2f2;
        height:100vh;
    }
    a{
        color:#fff;
    }
    .listall{
        width:100%;
        display:flex;
        flex-direction: row  ;
        align-items: flex-start;
        justify-content:  flex-start;
        padding-bottom:26px;
        box-sizing:border-box;
        padding:20px 20px;
    .part{
        display:flex;
        flex-direction: row  ;
        align-items:center;
        justify-content:  flex-start;
        width:100%;
    span{
        display:inline-block;
    img{
        width:26px;
        height:26px;
        margin-right:10px;
        float: left;
    }
    p{text-align:left;}
    }
    &:nth-child(1){
         position:relative;
    &:after{
         content:"";
         position:absolute;
         right:0;
         top:0;
         z-index:0;
         width:1px;
         height:40px;
         background:#f89e81;
         display:block;
     }
    }
    &:nth-child(2){
         padding-left:20px;
     }
    }
    }
    .profithead{
        position:relative;
        width:100%;
        background:url('../assets/tuijianbg.jpg') #ff5134 no-repeat;
        background-size:100%;
        color:#fff;
        padding-top:50px;
    h2{
        font-size:30px;
        line-height:40px;
        margin-top:20px;
    }
    p{
        font-size:12px;
        line-height:16px;
        margin-bottom:3px;
    }
    span.btnyellow{
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
    p.bzjshow{
        color:#ffdf8a;
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
    &.hover{
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