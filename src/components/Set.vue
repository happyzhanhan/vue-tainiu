<!--
 * Created by happy<1659725767@qq.com> on 2018/6/27 18:06.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="adresslistbox">
            <div class="copyright">
                <p><img src="../assets/logotx.png" alt=""/></p>
                <h3>泰牛订货系统</h3>
                <p>当前版本V1.0.1</p>
            </div>
            <div class="linebox">
                <router-link to="/profit">
                    <span>
                        <i><img src="../assets/question.png" alt=""/></i>
                        <b>常见问题</b>
                    </span>
                    <span>
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </router-link>
            </div>
            <div class="linebox">
                <router-link to="/profit">
                    <span>
                        <i><img src="../assets/kefu.png" alt=""/></i>
                        <b>联系客服</b>
                    </span>
                    <span>
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </router-link>
            </div>
            <div class="linebox">
                <router-link to="/profit">
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
                localStorage.setItem("TAINIUUID",'');
                localStorage.setItem("TAINIUROLER",'');
                localStorage.setItem("TAINIUPERSON",'');
                this.$router.push({path:'/login'});
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