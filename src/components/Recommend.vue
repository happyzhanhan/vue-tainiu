<!--
 * Created by happy<1659725767@qq.com> on 2018/6/27 19:17.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="adresslistbox">
            <h2>您的专属推荐ID</h2>
            <h1>966</h1>
            <p>推荐用户注册时填写您的专属推荐ID，即可加入您的团队，您将按照规定获得推荐利润。</p>

            <div class="moreblock">
                <h4>复制链接发给好友，注册完成即可加入您的团队</h4>
                <p><b>http://tainiu.com/register?tid=925</b><el-button size="mini" round>复制</el-button></p>
                <div class="line"></div>
                <span>
                    <img src="../assets/ewm.jpg" alt=""/>
                </span>
                <h4 class="tcenter">或直接扫一扫注册，加入您的团队▲</h4>


            </div>


        </div>
    </div>
</template>

<script>
    import tnhead from '@/components/Head.vue';

    export default{
        name: 'Recommonend',
        components: {tnhead},
        data()
    {
        return {
            headname: '我要推荐',
            headstyle: 'whitetop'
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

    .adresslistbox{
        height:94vh;
        background:url('../assets/tuijianbg.jpg') #ff5335 no-repeat;
        background-size:100% 100vh;
        color:#fff;
    padding:30px 30px;
    box-sizing:border-box;
        h2{
            font-size:18px;
            line-height:30px;
        }
        h1{
            font-size:20px;
            line-height:36px;
        }
        p{
            font-size:14px;
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
                text-align:left;
                padding:0 30px;
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
                    margin-left:30px;
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