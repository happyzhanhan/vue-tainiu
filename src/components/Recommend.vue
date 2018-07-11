<!--
 * Created by happy<1659725767@qq.com> on 2018/6/27 19:17.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="adresslistbox">
            <h2>您的专属推荐ID</h2>
            <h1>{{uid}}</h1>
            <p>推荐用户注册时填写您的专属推荐ID，即可加入您的团队，您将按照规定获得推荐利润。</p>

            <div class="moreblock">
                <h4>复制链接发给好友，注册完成即可加入您的团队</h4>
                <p><b class="link">{{turl}}</b><el-button type="button"
                                                           v-clipboard:copy="turl"
                                                           v-clipboard:success="onCopy"
                                                           v-clipboard:error="onError" size="mini" round>复制</el-button></p>
                <div class="line"></div>
                <span>
                    <img src="../assets/ewm.jpg" alt="" id="imgSrc"/>
                </span>
                <h4 class="tcenter">或直接扫一扫注册，加入您的团队▲</h4>


            </div>


        </div>
    </div>
</template>

<script>
    import tnhead from '@/components/Head.vue';
    var QRCode = require('qrcode');

    export default{
        name: 'Recommonend',
        components: {tnhead},
        data()
        {
            return {
                headname: '我要推荐',
                headstyle: 'whitetop',
                uid: 0,
                person:{
                    username:'木有用户名',
                    rolerid:1,
                    rolername:'区域代理'
                },
            }
        },
        computed:{
            turl:function(){
                return 'http://tainiu.yggx.com/index.php/index/index/index#/register?tid='+this.uid;
            },
        },
        created:function(){
            this.getuid();
        },
        mounted: function () {
            QRCode.toDataURL(this.turl, {errorCorrectionLevel: "H"}, function (err, url) {
                document.getElementById('imgSrc').src = url;
            });
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

        }
    }
</script>

<style lang="scss" scoped>
    .tainiubox {
        padding-top: 50px;
        min-height: 94vh;
        background: #f5f5f5;
    }

    b.link{
        width: 160px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        display: inline-block;
        float: left;
        line-height: 30px;
        color:#8a6c6c;

    }
    .adresslistbox{
        min-height:94vh;
        background:url('../assets/tuijianbg.jpg') #ff5335 no-repeat;
        background-size:100% 100vh;
        color:#fff;
        padding:10px 20px;
        box-sizing:border-box;
        h2{
            font-size:20px;
            line-height:30px;
        }
        h1{
            font-size:22px;
            line-height:36px;
        }
        p{
            font-size:12px;
            text-align:left;
        }

        .moreblock{
            background:#fff;
            border-radius:4px;
            color:#333;
            padding:15px 0;
            margin-top:18px;
            h4{
                color:#5c1115;
                line-height:30px;
                text-align:center;
                padding:0 10px;
                font-size:14px;
                font-weight:600;
                &.tcenter{
                    text-align:center;
                 }
            }
            p{
                padding:0 30px;
                text-align:left;
                line-height:30px;
                button{
                    padding:4px 16px;
                    border-color:#da180c;
                    color:#da180c;
                    margin-left:10px;
                }
            }
            .line{
                background:url('../assets/tuijian-line.png') no-repeat;
                background-size:100%;
                height:30px;
                width:100%;
                display:block;
                position:relative;

                &:before{
                    content:'';
                    position:absolute;
                    top:3px;
                    left:0;
                    margin-left:-15px;
                    z-index:2;
                    width:30px;
                    height:30px;
                    display:inline-block;
                    border-radius:50%;
                    background:#f97443;
                 }
                &:after{
                     content:'';
                     position:absolute;
                     top:3px;
                     right:0;
                     margin-right:-15px;
                     z-index:4;
                     width:30px;
                     height:30px;
                     display:inline-block;
                     border-radius:50%;
                     background:#da190e;
                 }
            }
            span{
                display:inline-block;
                padding:10px 60px;
                img{
                    width:100%;
                }
            }
        }

    }
</style>