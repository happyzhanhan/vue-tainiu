<!--
 * Created by happy<1659725767@qq.com> on 2018/6/26 14:40.
 -->

<template>
 <div class="tainiubox" :class="showno ? 'whitebg':''">
    <tnhead :headname="headname"  :headstyle="headstyle"></tnhead>
    <div class="adresslistbox">
        <div class="shownone" v-show="showno">
            <img src="../assets/noaddress.jpg" alt=""/>
            <p>您未添加地址！</p>
        </div>
        <div class="adresslist" v-show="!showno">
            <div class="fixed">
                <div class="tabnav">
                    <ul>
                        <li class="hover">收货地址</li>
                        <li>发货地址</li>
                    </ul>
                </div>
            </div>
            <div class="tabcontent">
                <div class="addressone">
                    <span>
                     <p><b>收货人：柯基</b><em>15088700456</em></p>
                     <p class="locationall">收货地址：浙江省杭州市江干区下沙13号大街53号浙江省杭州市江干区下沙13号大街53号</p>
                    </span>
                    <h6>
                        <span class="red"><i class="el-icon-success"></i>  默认地址</span>
                        <span>
                            <b><el-button type="text"><i class="el-icon-edit"></i> 编辑</el-button></b>
                            <b><el-button type="text"><i class="el-icon-delete"></i> 删除</el-button></b>
                        </span>
                    </h6>
                </div>

                <div class="addressone">
                    <span>
                     <p><b>收货人：柯基</b><em>15088700456</em></p>
                     <p class="locationall">收货地址：浙江省杭州市江干区下沙13号大街53号</p>
                    </span>
                    <h6>
                        <span><i class="el-icon-success"></i>  默认地址</span>
                        <span>
                            <b><el-button type="text"><i class="el-icon-edit"></i> 编辑</el-button></b>
                            <b><el-button type="text"><i class="el-icon-delete"></i> 删除</el-button></b>
                        </span>
                    </h6>
                </div>

                <div class="addressone">
                    <span>
                     <p><b>收货人：柯基</b><em>15088700456</em></p>
                     <p class="locationall">收货地址：浙江省杭州市江干区下沙13号大街53号浙江省杭州市江干区下沙13号大街53号</p>
                    </span>
                    <h6>
                        <span><i class="el-icon-success"></i>  默认地址</span>
                        <span>
                            <b><el-button type="text"><i class="el-icon-edit"></i> 编辑</el-button></b>
                            <b><el-button type="text"><i class="el-icon-delete"></i> 删除</el-button></b>
                        </span>
                    </h6>
                </div>
            </div>
        </div>
        <div class="btnbox">
            <button class="success" @click="Toadd">新增地址</button>
        </div>
    </div>
 </div>
</template>

<script>
import tnhead from '@/components/Head.vue';
const api = 'http://tainiu.yagou.com:8089';
export default{
 name:'Adresslist',
 components:{tnhead},
 data(){
  return{
    headname:'地址管理',
    headstyle:'whitetop',
    uid:0,
    showno:true,
  }
 },
 created:function(){
     this.getuid();
     this.getAjax();
 },
 methods:{
     Toadd(){
         this.$router.push({path:'/addadress'})
     },
     getuid:function(){
         if(localStorage.getItem("TAINIUUID")=='null'|| typeof localStorage.getItem("TAINIUUID") == "undefined" || localStorage.getItem("TAINIUUID") == null || localStorage.getItem("TAINIUROLER") == ""){
             this.$router.push({path:'/login'})
         }else{
             this.uid = localStorage.getItem("TAINIUUID");
         }
     },
     getAjax:function () {
         let data = {uid:this.uid}
         this.$http.post(api+'/index/Address/AddressSelectService.html',data).then((res)=>{

             if(res.body.code=='SUCCESS'){
                if(res.body.arr_length==0){
                    this.showno=true;
                }
             }
         },(res)=>{
             this.$message({
                 message: '系统错误！',
                 type: 'error',
                 customClass:'black'
             });
             console.log(res);
         })
    }
 }
}
</script>

<style lang="scss" scoped>
 .tainiubox{
  padding-top:6vh;
  height:94vh;
  background:#f5f5f5;
  &.whitebg{
     background:#fff;
   }
 }

 .shownone{
    img{margin-top:20px;}
     p{margin-top:20px; margin-bottom:50px;}
 }

 .tabnav{
     wiidth:100%;
 background:#fff;
 ul{
     width:100%;
     display:flex;
     flex-direction: row ;
     align-items: stretch;
     justify-content: space-around;
 li{
     width:50%;
     line-height:40px;
     background:#fff;
     font-weight:600;
     position:relative;

 &:before{
      content:"";
      position:absolute;
      width:1px;
      height:30px;
      display:block;
      background:#f5f5f5;
      right:0;
      top:5px;
  }
 &:after{
      content:'';
      position:absolute;
      bottom:0;
      left:50%;
      margin-left:-50px;
      width:100px;
      height:2px;
      background:#f0160d;
      display:none;
  }
 &:last-child{
 &:before{
      display:none;
  }
 }
 &:hover,&.hover{
              color:#f0160d;
 &:after{display:block;}
 }
 }
 }
 }

 .tabcontent{
     margin-top:5px;
 }
 .addressone{
    line-height:20px;
    color:#676767;
    border-bottom:10px solid #f5f5f5;
    background:#fff;

     >span{
     display:block;
        padding:10px 20px;
        box-sizing:border-box;
         p{
             display:flex;
             flex-direction: row   ;
             align-items: stretch;
             justify-content: space-between;
             &.locationall{
                  text-align:left;
              }
         }
     }
     h6{
         display:flex;
         flex-direction: row   ;
         align-items: stretch;
         justify-content: space-between;
         border-top:1px solid #f5f5f5;
         padding:10px 20px;
         box-sizing:border-box;
         span{
         color:#d8d8d8;
             &.red{color:#f40000;}
             line-height:20px;
             b{
                 button{
                     padding:0;
                     color:#666;
                     margin-left:10px;
                     &:hover{
                        color:#f40000;
                      }
                 }
             }
         }
     }
 }


 .btnbox{
     margin-top:20px;
 }

</style>