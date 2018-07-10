<!--
 * Created by happy<1659725767@qq.com> on 2018/6/26 18:31.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="teambox">
            <div class="teamnumber">
                <p>团队人数</p>
                <h2>{{datanumber}}</h2>
            </div>
            <div class="searchbox">
                <div class="searchbar">
                    <div class="el-icon-search"></div>
                    <div class="input">
                        <input type="text" placeholder="搜索用户名" v-model="searchname"/>
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
                            <th>序号</th>
                            <th width="40%">日期</th>
                            <th>用户</th>
                            <th>角色</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(person,index) in myteam"  v-if="person.username==searchname || searchname=='' ">
                            <td>{{index+1}}</td>
                            <td>{{person.reg_time}}</td>
                            <td>{{getphonenumber(person.username)}}</td>
                            <td>{{getrulename(person.rule_id)}}</td>
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
                searchname:'',
            }
        },
        created:function(){
            this.getAjaxmyteam();
        },
        methods: {
            getAjaxmyteam:function () {
                let data = {};
                let _this = this;
                    this.axios.post('/index.php/index/My_manage/MyTeamService.html',data).then((res)=>{

                        if(res.data.code=='SUCCESS'){
                            _this.datanumber = res.data.data.total;
                            _this.myteam = res.data.data.rows;
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
            getphonenumber:function(phone){
                return phone.substr(0, 3) + '****' + phone.substr(7);
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

        },
    }
</script>

<style lang="scss" scoped>
    .tainiubox {
        padding-top: 50px;
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