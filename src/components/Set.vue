<!--
 * Created by happy<1659725767@qq.com> on 2018/6/27 18:06.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="adresslistbox">
            <div class="copyright">
                <p><img src="../assets/logotx.png" alt=""/></p>
                <h3>泰牛订货系统 <span>内测版</span></h3>
                <p>当前版本V0.0.1</p>
                <p class="tips">内测期间所有数据将会被清除</p>
            </div>
            <div class="linebox">
                <router-link to="/setpersonal">
                    <span>
                        <i><img src="../assets/kefu.png" alt=""/></i>
                        <b>用户设置</b>
                    </span>
                    <span>
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </router-link>
            </div>
            <!--<div class="linebox">
                <router-link to="/profit">
                    <span>
                        <i><img src="../assets/question.png" alt=""/></i>
                        <b>常见问题</b>
                    </span>
                    <span>
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </router-link>
            </div>-->
            <div class="linebox">
                <a href="tel:057156581013">
                    <span>
                        <i><img src="../assets/kefu.png" alt=""/></i>
                        <b>联系客服</b>
                    </span>
                    <span>
                        <i style="font-size:14px;">05715-6581013</i>
                    </span>
                </a>
            </div>
            <div class="linebox">
                <router-link to="/sendopinion">
                    <span>
                        <i><img src="../assets/fankui.png" alt=""/></i>
                        <b>意见反馈</b>
                    </span>
                    <span>
                        <i class="el-icon-arrow-right"></i>
                    </span>
               </router-link>
            </div>

            <div class="btnbox mt-80">
                <button class="success" @click="layout">退出登录</button>
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
                headname: '设置',
                headstyle: 'whitetop'
            }
        },
        methods:{
            layout(){
                localStorage.removeItem("TAINIUUID");
                localStorage.removeItem("TAINIUROLER");
                localStorage.removeItem("TAINIUPERSON");
                this.$router.push({path:'/login'});
            },
        }
    }
</script>

<style lang="scss" scoped>
    .tainiubox {
        padding-top: 50px;
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
            margin-top:20px;
            font-size:14px;
            font-weight:600;
            line-height:30px;
            span{
                width: 30px;
                height:16px;
                font-size: 8px;
                line-height: 16px;
                display:inline-block;
                margin-left:2px;
                background: #eee;
                border-radius: 5px;
                color:#fff;
                text-align: center;
            }
        }
        p{
            color:#999;
            font-size:12px;
            &.tips{
        font-size: 10px;
                color:red;
        text-align: center;
             }
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