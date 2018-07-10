<!--
 * Created by happy<1659725767@qq.com> on 2018/6/29 9:51.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="adresslistbox">
            <div class="detailbanner">
                <span>{{statusname(trad.status)}}</span>
                <img src="../assets/detailpost.jpg" alt=""/>
            </div>
            <div class="orderlogisticsdetail hiddenbox" style="display:none;">
                <div class="logisticsbox" >
                    <div class="lefticon">
                        <img src="../assets/icon-15.png" alt=""/>
                    </div>
                    <div class="rightpart">
                        <div class="onelogistics">
                          <span>
                               <i class="arrive"></i>
                          </span>
                        <span>
                            <h5 class="arrive">订单已签收，提货地点【蜂巢快递柜】</h5>
                            <p>2018-05-16 15:20:25</p>
                        </span>
                        </div>
                        <div class="onelogistics">
                           <span><i></i></span>
                        <span>
                            <h5>商品已到达杭州中转站</h5>
                            <p>2018-05-16 15:20:25</p>
                        </span>
                        </div>
                        <div class="onelogistics">
                            <span><i></i></span>
                        <span>
                            <h5>商品已到达杭州中转站</h5>
                            <p>2018-05-16 15:20:25</p>
                        </span>
                        </div>
                        <div class="onelogistics">
                            <span><i></i></span>
                        <span>
                            <h5>商品已到达杭州中转站</h5>
                            <p>2018-05-16 15:20:25</p>
                        </span>
                        </div>
                        <div class="onelogistics">
                            <span><i></i></span>
                        <span>
                            <h5>商品已到达杭州中转站</h5>
                            <p>2018-05-16 15:20:25</p>
                        </span>
                        </div>
                    </div>
                </div>
               <div class="moredetail">
                   <p><b>点击查看更多物流详情</b><i><img src="../assets/icon-17.png" alt=""/></i></p>
               </div>
            </div>

            <div class="location" v-if="trad.consignee != null && trad.consignee !=''">
                <span>
                 <i class="el-icon-location-outline"></i>
                </span>
                <span>
                 <p><b>收货人：{{trad.consignee}}</b><em>{{trad.consignee_phone}}</em></p>
                 <p>收货地址：{{trad.consignee_system_address}} {{trad.consignee_detail_address}}</p>
                </span>
            </div>

            <div class="orderproshow">
                <p><b>订单编号：{{trad.trade_number}}</b> <button
                        v-clipboard:copy="trad.trade_number"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError">复制</button></p>
                <div class="product">
                    <span><img :src="trad.product_pic_url" alt=""></span>
                    <span>
                     <p><b>产品:{{trad.trade_name}}</b><em></em></p>
                     <p><b>数量：{{trad.product_amount}}</b><em></em></p>
                    </span>
                </div>
                <p><span><b>共{{trad.product_amount}}件商品，付款金额：</b><em>￥{{trad.amount_pay}}</em></span></p>
            </div>

            <div class="ordernumber">
                <p>付款编号： {{wallet_serial.serial_number}}</p>
                <p>下单时间： {{trad.add_time}}</p>
                <p>付款时间： {{trad.add_time}}</p>
                <!--<p>发货时间： 2018-05-16 16:50:20</p>
                <p>收货时间： 2018-05-16 16:50:20</p>-->
            </div>

            <div class="sendproduct" style="display: none;">
                <h3>发货信息</h3>
                <div class="onelineaddress">
                    <h4><b>柯基</b><em>123456789</em></h4>
                    <p><b>浙江省 杭州市 江干区 白杨街道 13号路22号大街交叉口雅购大楼</b></p>
                </div>
                <p>韵达快递：1656323214</p>
            </div>

            <div class="kongbox"></div>

            <div class="bottombtn">
                <el-button size="mini" round>操作</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import tnhead from '@/components/Head.vue';

    export default{
        name: 'Orderdetail',
        components: {tnhead},
        data()
        {
            return {
                headname: '订单详情',
                headstyle: 'whitetop',
                uid:1,
                trad:{},
                wallet_serial:{},
            }
        },
        created:function(){
            this.getuid();
            this.getallorderdetail();
        },
        methods:{
            getuid(){
                let persondata=JSON.parse(localStorage.getItem("TAINIUPERSON"));
                if(persondata){
                    this.uid =  persondata['id'];
                }else{
                    this.$router.push({path:'/login'})
                }
            },
            getallorderdetail:function(){
                let _this = this;
                let data = {trade_number:this.$route.query.trade_number};
                this.axios.post('/index.php/index/oder/OderDetailedService.html',data).then((res)=>{
                    if(res.data.code=='SUCCESS'){
                        console.log(res.data);
                        _this.trad = res.data.data.trad;
                        _this.wallet_serial = res.data.data.wallet_serial;
                    }else if(res.data.data == 'LOGIN_TAINIU_ERROR'){
                        this.$message({
                            message: '登录超时，请重新登录',
                            type: 'error',
                            customClass:'black'
                        });
                        _this.$router.push({path:'/login'});
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
            statusname:function(status){
                switch(parseInt(status)){
                    case 0: return '订单未支付';
                        break;
                    case 1: return '订单支付,待发货';
                        break;
                    case 2: return '订单已发货';
                        break;
                    case 3: return '订单已收货';
                        break;
                    case 4: return '订单已完成';
                        break;
                   default: return '订单状态';
                        break;
                }
            },
            onCopy: function (e) {
                this.$message({
                    message: '复制成功！',
                    type: 'success',
                    customClass:'black'
                });
                console.log('你刚刚复制: ' + e.text)
            },
            onError: function (e) {
                this.$message({
                    message: '复制失败！',
                    type: 'error',
                    customClass:'black'
                });
                console.log('无法复制文本！')
            }

        },
}
</script>

<style lang="scss" scoped>
    .tainiubox {
        padding-top: 50px;
        height: 94vh;
        background: #f5f5f5;
    }

    .detailbanner{
        position:relative;
        span{
            position: absolute;
            top:29px;
            left:30px;
            z-index:9;
            color:#fff;
            font-size:16px;
        }
    }

    .orderlogisticsdetail{
        background:#fff;
        position:relative;
        padding-bottom:30px;

        &.hiddenbox{
             height:90px;
             overflow:hidden;
         }

        .moredetail{
            width:100%;
            height:30px;
            display:block;
            background:#fff;
            line-height:30px;
            font-size:8px;
            color:#9b9b9b;
            text-align:center;
            position:absolute;
            z-index:10;
            bottom:0px;

            img{
                width:12px;
                height:12px;
                margin-left:3px;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .logisticsbox{
            display:flex;
            flex-direction:row;
            .lefticon{
                width:16%;
                margin:40px 0;
                text-align:right;
                img{
                    width:25px;
                    height:20px;
                }
            }
            .rightpart{
                position:relative;
                text-align:left;
                &:before{
                    content:"";
                    position:absolute;
                    top:15px;
                    left:25px;
                    width:1px;
                    height:calc(100% - 30px);
                    background:#9c9c9c;
                    display:inline-block;
                 }
                .onelogistics{
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    margin-top:10px;
                    span:nth-child(1){
                        width:50px;
                        text-align:center;
                    }
                    i{
                        position:relative;
                        z-index:9;
                        width:8px;
                        height:8px;
                        border-radius:50%;
                        display:inline-block;
                        background:#9c9c9c;
                        &.arrive{
                            width:18px;
                            height:18px;
                            display:inline-block;
                            background:url('../assets/icon-16.png') no-repeat;
                            background-size:100%;
                        }
                    }

                    h5{
                        color:#676767;
                        font-size:10px;
                        &.arrive{
                             color:#4c8e37;
                         }
                    }
                    p{
                        color:#999;
                        font-size:8px;
                    }
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
        background:#fff;
        margin-top:6px;

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
             width:15%;
             text-align:center;
        i{
            font-size:20px;
            text-align:center;
        }
        }
        &:nth-child(2){
             width:85%;
             float:left;
             text-align:left;
         }
        }
    }

    .product{
        margin-top:3px;
        background:#fafafa;
        display:flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        padding:5px 10px;
        box-sizing:border-box;

        span{
            display:block;
            &:nth-child(1){
                 width:15%;
                img{
                    border:1px solid #e2e2e2;
                }
            }
            &:nth-child(2){
                 width:85%;
                padding-left:5px;
             }
            img{
                width:40px;
                height:40px;
            }
            p{
                &:nth-child(1){
                     color:#000;
                     font-weight:600;
                     font-size:14px;
                 }
                &:nth-child(2){
                     color:#a1a1a1;
                     font-size:10px;
                     width:100%;
                     float:left;

                 }
                b{float:left; overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                font-size:12px;}
                em{
                    float:right;
                    text-align:right;
                    font-style:normal;
                }
            }
        }
    }

.orderproshow{
    background:#fff;
    margin-top:6px;
    >p{
        font-size:12px;
        line-height:30px;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        box-sizing:border-box;
        padding:0 10px;
        button{
            outline:none;
            font-size:10px;
            line-height:10px;
            border:1px solid #ddd;
            background:#fff;
            border-radius:3px;
            padding:0 10px;
            margin-top:4px;
        }
        span{
            em{
                color:#f40000;
            }
        }
    }
}

.ordernumber{
    background:#fff;
    margin-top:8px;
    line-height:16px;
    font-size:12px;
    text-align:left;
    box-sizing:border-box;
    padding:12px 10px;
    color:#676767;
}

.sendproduct{
    background:#fff;
    margin-top:8px;

    >h3{text-align:left;font-size:14px;line-height:30px;text-indent:10px; color:#000;}
     >p{line-height:30px;text-align:left;text-indent:10px; font-size:12px;}
    .onelineaddress{
        background:#fafafa;
        margin:5px 0;
        box-sizing:border-box;
        padding:10px;
        &:hover{
             background:#eee;
         }
        h4{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            font-size:14px;
            line-height:20px;
            font-weight:700;
            color:#5d5d5d;
        }
        p{  text-align:left;
            color:#5d5d5d;
            font-size:12px;
        }
    }
}
.kongbox{width:100%;height:60px; background:#f5f5f5;}
.bottombtn{
    position:fixed;
    z-index:999;
    bottom:0;
    height:50px;
    width:100%;
    background:#fff;
    box-sizing:border-box;
    padding:0 10px;
    button{float:right;margin-top:10px;}
}

</style>