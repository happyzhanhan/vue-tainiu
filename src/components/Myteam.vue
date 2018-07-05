<!--
 * Created by happy<1659725767@qq.com> on 2018/6/26 18:31.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="teambox">
            <div class="teamnumber">
                <p>团队人数</p>
                <h2>0</h2>
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
                <table v-if="datanumber!=0">
                    <thead>
                        <tr>
                            <th width="40%">日期</th>
                            <th>用户</th>
                            <th>角色</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
                        </tr>
                        <tr>
                            <td>2018-06-12 16:00:22</td>
                            <td>150***1541</td>
                            <td>区代</td>
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
            headname: '我的团队',
            headstyle: 'whitetop',
            datanumber:0,
        }
    }
    }
</script>

<style lang="scss" scoped>
    .tainiubox {
        padding-top: 6vh;
        height: 94vh;
        background: #f5f5f5;
    }

.teamnumber{
    width:100%;
    background:url('../assets/teambg.jpg') #ff5234;
    background-size:100%;
    padding:20px 0;
    color:#fff;
    p{font-size:14px; line-height:30px;}
    h2{font-size:20px; font-weight:600;}
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