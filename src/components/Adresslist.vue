<!--
 * Created by happy<1659725767@qq.com> on 2018/6/26 14:40.
 -->

<template>
 <div class="tainiubox" :class="showno ? 'whitebg':''">
    <tnhead :headname="headname"  :headstyle="headstyle"></tnhead>
    <div class="adresslistbox">

        <div class="adresslist" v-show="!showno">
            <div class="fixed">
                <div class="tabnav">
                    <ul>
                        <li :class="{'hover':addr_type==0}" @click="addr_type=0">收货地址</li>
                        <li :class="{'hover':addr_type==1}" @click="addr_type=1">发货地址</li>
                    </ul>
                </div>
            </div>
            <div class="tabcontent">
                <div class="addressone" v-for="(ad,index) in addresslist" >
                    <div v-if="ad.addr_type==addr_type">
                        <div v-if="ad.default_addr=='1' ">
                             <span>
                             <p><b>收货人：{{ad.fullname}}</b><em>{{ad.phone}}</em></p>
                             <p class="locationall">收货地址：{{ad.address_system}}{{ad.address_detail}}</p>
                             </span>
                            <h6>
                                <span :class="{'red': ad.default_addr == 1 }"><i class="el-icon-success"></i>  默认地址</span>
                                <span>
                                    <b><el-button type="text" @click="Toupdate(ad.id,ad.addr_type)"><i class="el-icon-edit" ></i> 编辑</el-button></b>
                                    <b><el-button type="text" @click="deletead(ad,index)"><i class="el-icon-delete"></i> 删除</el-button></b>
                                </span>
                            </h6>
                       </div>
                    </div>
                </div>

                <div class="addressone" v-for="(ad,index) in addresslist" >
                    <div v-if="ad.addr_type==addr_type">
                        <div v-if="ad.default_addr=='0' || ad.default_addr==null">
                             <span>
                             <p><b>收货人：{{ad.fullname}}</b><em>{{ad.phone}}</em></p>
                             <p class="locationall">收货地址：{{ad.address_system}}{{ad.address_detail}}</p>
                             </span>
                            <h6>
                                <span :class="{'red': ad.default_addr == 1 }"><i class="el-icon-success"></i>  默认地址</span>
                                <span>
                                    <b><el-button type="text" @click="Toupdate(ad.id)" ><i class="el-icon-edit" ></i> 编辑</el-button></b>
                                    <b><el-button type="text" @click="deletead(ad,index)"><i class="el-icon-delete"></i> 删除</el-button></b>
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shownone animated fadeIn" v-if="showno">
            <img src="../assets/noaddress.jpg" alt=""/>
            <p>您未添加地址！</p>
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
    fullscreenLoading: true,
    headname:'地址管理',
    headstyle:'whitetop',
    uid:0,
    showno:true,
    addr_type:0,
    addresslist:{

    },
  }
 },
beforeCreate:function(){

},
 created:function(){
     this.getuid();
     this.getAjax();
 },
mounted:function(){

},
 methods:{
     Toadd(){
         this.$router.push({path:'/addadress',query:{type:'add',addr_type:this.addr_type}})
     },
     Toupdate(id,addr_type){
         this.$router.push({path:'/addadress',query:{type:'update',id:id,addr_type:addr_type}});
     },
     getuid:function(){
         if(localStorage.getItem("TAINIUUID")=='null'|| typeof localStorage.getItem("TAINIUUID") == "undefined" || localStorage.getItem("TAINIUUID") == null || localStorage.getItem("TAINIUROLER") == ""){
             this.$router.push({path:'/login'})
         }else{
             this.uid = localStorage.getItem("TAINIUUID");
         }
     },
     getAjax:function () {
         let data = {}  //uid:this.uid
         this.axios.post('/api/index/Address/AddressSelectService.html',data).then((res)=>{

             if(res.data.code=='SUCCESS'){
                if(res.data.num==0){
                    this.showno=true;
                }else{
                    this.showno=false;
                    this.addresslist =  res.data.data;
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
    },
    getAjaxdelete:function ($id) {
        let data = {id:$id,} //uid:parseInt(this.uid)
        this.axios.post('/api/index/Address/AddressDeleteService.html',data).then((res)=>{

            if(res.data.code=='SUCCESS'){

            }else{
                this.$message({
                    message: '系统删除失败！',
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
    deletead:function(ad,i){
        var _this = this;
        this.$confirm('确认删除该地址?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    _this.addresslist.splice(i,1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                        customClass:'black'
                    });
                    _this.getAjaxdelete(ad.id);


            }).catch(() => {
            this.$message({
                    type: 'info',
                    message: '已取消删除',
                    customClass:'black'
                });
        });
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

 .tabcontent{
     background:none;
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
    background:#fff;
 margin-bottom:5px;

     div{
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

 }


 .btnbox{
     margin-top:20px;
 }

</style>