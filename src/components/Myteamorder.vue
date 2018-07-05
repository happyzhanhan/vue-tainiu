<!--
 * Created by happy<1659725767@qq.com> on 2018/6/27 14:26.
 -->

<template>
    <div class="tainiubox">
        <div class="adresslistbox">
            <div class="topbox">
                <tnhead :headname="headname" ></tnhead>

                <div class="ordernumber">
                    订单量累计：0
                </div>
                <div class="listall">
                    <div class="part">
                        <span><img src="../assets/icon-money.png" alt=""></span>
                        <span>
                            <p>金额累计</p>
                            <p><b>￥</b><em>0.00</em></p>
                        </span>
                    </div>
                    <div class="part">
                        <span><img src="../assets/icon-moneymore.png" alt=""></span>
                        <span>
                            <p>利润累计</p>
                            <p><b>￥</b><em>0.00</em></p>
                        </span>
                    </div>
                </div>
            </div>


            <div class="searchbox">
                <div class="searchbar">
                    <div class="el-icon-search"></div>
                    <div class="input">
                        <input type="text" placeholder="搜索用户名" />
                    </div>
                </div>
                <div class="timebar">
                    <el-button type="text">
                        <i class="el-icon-date"></i>
                        日期
                        <i class="el-icon-caret-bottom"></i>
                    </el-button>
                </div>
            </div>
            <div class="content">
                <div class="showno  animated fadeIn" v-if="datanumber==0 || datanumber==null">
                    <img src="../assets/noimg.jpg" alt="空数据" width="50%" style="margin-top:50px;"/>
                    <p>没有数据哦！~</p>
                </div>
                <table  v-if="datanumber!=0 ">
                    <thead>
                    <tr>
                        <th width="40%">日期</th>
                        <th>用户</th>
                        <th>订单金额</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2018-06-12 16:00:22</td>
                        <td>150***1541</td>
                        <td>1065.0</td>
                    </tr>
                    <tr>
                        <td>2018-06-12 16:00:22</td>
                        <td>150***1541</td>
                        <td>15.0</td>
                    </tr>
                    <tr>
                        <td>2018-06-12 16:00:22</td>
                        <td>150***1541</td>
                        <td>60.0</td>
                    </tr>
                    <tr>
                        <td>2018-06-12 16:00:22</td>
                        <td>150***1541</td>
                        <td>8520.0</td>
                    </tr>
                    <tr>
                        <td>2018-06-12 16:00:22</td>
                        <td>150***1541</td>
                        <td>4645.5</td>
                    </tr>

                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
    import tnhead from '@/components/Head.vue';

    export default{
        name: 'Adresslist',
        components: {tnhead},
        data()
    {
        return {
            headname: '团队订单',
            datanumber:0,
        }
    }
    }
</script>

<style lang="scss" scoped>
    .tainiubox {
        min-height: 100vh;
        background: #f5f5f5;
    }

    .topbox{
        width:100%;
        background:url('../assets/teamorderbg.jpg') #ff5437 no-repeat;
        background-size:100%;
        padding-top:6vh;
        color:#fff;
        padding-left:20px;
        padding-right:20px;
        box-sizing:border-box;
    }

    .ordernumber{
        font-size:16px;
        text-align:left;
        float:left;
        margin-top:20px;
        margin-bottom:40px;
        width:100%;
    }

    .listall{
        width:100%;
        display:flex;
        flex-direction: row  ;
        align-items: flex-start;
        justify-content:  flex-start;
        padding-bottom:26px;

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

    .searchbox{
        background:#fff;
        display:flex;
        flex-direction: row ;
        align-items: center;
        justify-content: space-between;
        padding:0 20px;
        box-sizing:border-box;

    .searchbar{
        height:30px;
        background:#f2f2f2;
        border-radius:50px;
        line-height:30px;
        padding:0 10px;

        display:flex;
        flex-direction: row ;
        align-items: center;
        justify-content: space-between;

    .el-icon-search{
    }
    input{
        background:#f2f2f2;
    }
    }

    .timebar{
    button{color:#666;
    &:hover{
         color:#f24648;
     }
    }
    }
    }

    .content{
        margin-top:5px;
    table{
        width:100%;
        background:#fff;
        padding:0;
    tr{
    th,td{
        border-bottom:1px solid #f5f5f5;
        line-height:30px;
    }
    }
    }
    }
</style>