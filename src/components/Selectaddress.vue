<!--
 * Created by happy<1659725767@qq.com> on 2018/6/29 9:13.
 -->

<template>
    <div class="tainiubox" :class="shownone?'whitebg':''">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="adresslistbox" >
            <div class="adresslist"  v-show="!shownone">
                <div class="onelineaddress">
                    <h4><b>柯基</b><em>123456789</em></h4>
                    <p><s v-show="1">【默认地址】</s><b>浙江省 杭州市 江干区 白杨街道 13号路22号大街交叉口雅购大楼</b></p>
                </div>
                <div class="onelineaddress">
                    <h4><b>柯基</b><em>123456789</em></h4>
                    <p><s v-show="0">【默认地址】</s><b>浙江省 杭州市 江干区 白杨街道 13号路22号大街交叉口雅购大楼</b></p>
                </div>
                <div class="onelineaddress">
                    <h4><b>柯基</b><em>123456789</em></h4>
                    <p><s v-show="0">【默认地址】</s><b>浙江省 杭州市 江干区 白杨街道 13号路22号大街交叉口雅购大楼</b></p>
                </div>
                <div class="onelineaddress">
                    <h4><b>柯基</b><em>123456789</em></h4>
                    <p><s v-show="0">【默认地址】</s><b>浙江省 杭州市 江干区 白杨街道 13号路22号大街交叉口雅购大楼</b></p>
                </div>
            </div>
            <div class="adressnone" v-show="shownone">
                <img src="../assets/noaddress.jpg" alt=""/>
                <p>您未添加地址！</p>
            </div>
            <div class="btnbox">
                <button class="success">新增地址</button>
            </div>
        </div>
    </div>
</template>

<script>
    import tnhead from '@/components/Head.vue';

    export default{
        name: 'Selectaddress',
        components: {tnhead},
        data()
    {
        return {
            headname: '选择地址',
            headstyle: 'whitetop',
            shownone:true,
        }
    }
    }
</script>

<style lang="scss" scoped>
    .tainiubox {
        padding-top: 6vh;
        height: 94vh;
        background: #f5f5f5;
        &.whitebg{
             background:#fff;
         }
    }
    .onelineaddress{
        background:#fff;
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
            color:#000;
        }
        p{  text-align:left;
            color:#5d5d5d;
            font-size:12px;
            s{text-decoration:none;color:#f40000;margin-left:-8px;}
        }
    }
    .btnbox{margin-top:50px;}

</style>