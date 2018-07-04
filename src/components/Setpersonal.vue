<!--
 * Created by happy<1659725767@qq.com> on 2018/6/27 18:06.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="adresslistbox">
            <div class="copyright">
                <p><img src="../assets/tx.png" alt=""/></p>
                <h3>{{person.username}}</h3>
                <p>我的推荐ID:{{uid}}</p>
            </div>
            <div class="linebox">
                <router-link to="/forgetpaypassword">
                    <span>
                        <i><img src="../assets/question.png" alt=""/></i>
                        <b>修改支付密码</b>
                    </span>
                    <span>
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </router-link>
            </div>
            <div class="linebox">
                <router-link to="/forgetpassword">
                    <span>
                        <i><img src="../assets/kefu.png" alt=""/></i>
                        <b>修改登录密码</b>
                    </span>
                    <span>
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </router-link>
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
                headname: '用户设置',
                headstyle: 'whitetop',
                uid: 0,
                person:{
                    username:'木有用户名',
                    rolerid:1,
                    rolername:'区域代理'
                },
            }
        },
        created:function(){
            this.getuid();
        },
        methods:{
            getuid(){
                let persondata=JSON.parse(localStorage.getItem("TAINIUPERSON"));
                console.log(persondata);
                if(persondata){
                    this.person.rolerid = persondata.rule_id;
                    this.person.username=persondata['username'];

                    switch(this.person.rolerid){    //角色： 0 新用户，1 区域代理，2 一级代理，3 二级代理，4 门店
                        case 1:this.person.rolername = '区域代理';
                            break;
                        case 2:this.person.rolername = '一级代理';
                            break;
                        case 3:this.person.rolername = '二级代理';
                            break;
                        case 4:this.person.rolername = '门    店';
                            break;
                        default:this.person.rolername = '新用户';
                            this.haspermissions = false;
                            break;
                    }
                    this.uid=localStorage.getItem("TAINIUUID");
                }else{
                    this.$router.push({path:'/login'})
                }
            },

        }
    }
</script>

<style lang="scss" scoped>
    .tainiubox {
        padding-top: 6vh;
        height: 94vh;
        background: #f5f5f5;
    }

    .copyright{
        margin:50px auto 40px;

        img{
            width:80px;
            height:80px;
        }
        h3{
            color:#000;
            font-size:14px;
            font-weight:600;
            line-height:30px;
        }
        p{
            color:#999;
            font-size:8px;
        }
    }

    .linebox a{
        background:#fff;
        border:1px solid #f5f5f5;
        display:flex;
        flex-direction: row  ;
        align-items: center;
        justify-content:  space-between;
        line-height:40px;
        padding:0 20px;
        box-sizing:border-box;
        color:#2d2d2d;

        span{display:inline-block;}
        img{width:14px;height:14px;
            margin-top:15px;
        }
        i{
            font-size:20px;
            color:#8a8a8a;
        }

    }
</style>