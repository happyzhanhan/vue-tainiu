<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 15:10.
 -->
<template>
 <div class="withdrawal">
  <div class="withdrawalhead">
    <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
   </div>

  <div class="grybox"  v-show="showselect">
      <div class="kongblock" @click="showselect = !showselect">

      </div>
      <div class="adressselectbox">
          <h4 class="alerttitle"><b>选择收货地址</b><i class="el-icon-close" @click="showselect = !showselect"></i></h4>
          <div class="selectnamebox">
              <div class="topselectresult">
                <span :class="showarea==1?'hover':''" @click="showarea=1">
                    <b>{{pickdata.area1.name}}</b>
                    <input type="hidden" value="1" v-model="pickdata.area1.code"/>
                </span>
                <span :class="showarea==2?'hover':''"  @click="showarea=2">
                    <b>{{pickdata.area2.name}}</b>
                     <input type="hidden" value="1" v-model="pickdata.area2.code"/>
                </span>
                <span :class="showarea==3?'hover':''"  @click="showarea=3">
                    <b>{{pickdata.area3.name}}</b>
                    <input type="hidden" value="1" v-model="pickdata.area3.code"/>
                </span>
                <span :class="showarea==4?'hover':''"  @click="showarea=4">
                    <b>{{pickdata.area4.name}}</b>
                    <input type="hidden" value="1" v-model="pickdata.area4.code"/>
                </span>
              </div>
          </div>


          <div class="adresslistbox">
              <div class="onedata" v-for="(items,index) in arealist"  >

                <div :class="pickdata.area1.code==items.id?'hover':''" v-show="showarea==1" @click="changearea(index,items,$event)">
                    <p>{{items.name}},{{pickdata.area1.code}},{{items.id}} <i class="el-icon-check"></i></p>
                    <input type="hidden" value="1" v-model="items.id"/>
                </div>

                  <div class="onedata" v-for="(item,index) in items.children" >

                      <div :class="pickdata.area2.code==item.id?'hover':''" v-show="showarea==2 && item.pid==pickdata.area1.code" @click="changearea2(index,item,$event)" >
                          <p>{{item.name}},{{pickdata.area2.code}},{{item.id}} <i class="el-icon-check"></i></p>
                          <input type="hidden" value="1" v-model="item.id"/>
                      </div>

                      <div class="onedata" v-for="(ite,index) in item.children"  >

                          <div :class="pickdata.area3.code==ite.id?'hover':''" v-show="showarea==3 && ite.pid==pickdata.area2.code" @click="changearea3(index,ite,$event)">
                              <p>{{ite.name}},{{pickdata.area3.code}},{{ite.id}} <i class="el-icon-check"></i></p>
                              <input type="hidden" value="1" v-model="ite.id"/>
                          </div>

                          <div class="onedata" v-for="(i,index) in ite.children"  >

                              <div :class="pickdata.area4.code==i.id?'hover':''" v-show="showarea==4 && i.pid==pickdata.area3.code" @click="changearea4(index,i,$event)">
                                  <p>{{i.name}},{{pickdata.area4.code}},{{i.id}} <i class="el-icon-check"></i></p>
                                  <input type="hidden" value="1" v-model="i.id"/>
                              </div>

                          </div>

                      </div>

                  </div>

              </div>


          </div>

      </div>
  </div>

    <div class="formbigbox" >

        <div class="withdrawalform">
            <div class="linebox">
                <label for="name">收件人</label>
                <input type="text" placeholder="请输入收件人姓名" v-model="fullname"/>
                <span><i class="el-icon-success" :class="{'success':isSuccess1}"></i></span>
            </div>
            <div class="linebox">
                <label for="name">联系方式</label>
                <input type="text" placeholder="请输入收件人手机号" v-model="phone"/>
                <span><i class="el-icon-success" :class="{'success':isSuccess2}"></i></span>
            </div>
            <div class="linebox" @click="showselect = !showselect">
                <label for="name">所在地区</label>
                <input type="text" placeholder="选择省市区县" v-model="address_system"/>
                <span><i class="el-icon-arrow-right"></i></span>

            </div>
            <div class="linebox">
                <label for="name">详细地址</label>
                <input type="text" placeholder="街道、小区、门牌号等" v-model="address_detail"/>
                <span><i class="el-icon-success" :class="{'success':isSuccess3}"></i></span>
            </div>
            <div class="lineboxtwo">
                <el-radio v-model="addr_type" value="1" label="1">收货地址</el-radio>
                <el-radio v-model="addr_type" value="2" label="2">发货地址</el-radio>
            </div>
            <div class="linebox">
                <label class="w100" for="name">设为默认地址</label>
                <el-switch
                        v-model="default_addr"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                </el-switch>
            </div>

        </div>
        <div class="btnbox">
            <button :class="{'success':isSuccess4}">保   存</button>
        </div>

    </div>


  </div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
 const api = 'http://tainiu.yagou.com:8089';
 export default {
  name: 'Withdrawal',
  components: {tnhead},
   data (){
   return {
        headname:'新增地址',
        headstyle:'whitetop',
       isSuccess1:false,
       isSuccess2:false,
       isSuccess3:false,
       isSuccess4:false,

       fullname:'',
       phone:'',
       //address_system:'',
       address_detail:'',
       addr_type:'1',
       default_addr:true,

       showselect:true,

       showarea :1,
       pickdata:{
           area1:{
               code:'0',
               name:'请选择省',
               index:0,
           },
           area2:{
               code:'',
               name:'',
               index:0
           },
           area3:{
               code:'',
               name:'',
               index:0,
           },
           area4:{
               code:'',
               name:'',
               index:0,
           }
       },

       arealist:{0:{
            fullName:'1234',
            id:1,
            level:1,
            name:'A省',
            pid:0,
            pinyin:'eqew',
            type:'1',
            children:{0:{
                fullName:'1234',
                id:11,
                level:2,
                name:'A市',
                pid:1,
                pinyin:'eqew',
                type:'1',
                children:{0:{
                    fullName:'1234',
                    id:111,
                    level:3,
                    name:'A区县',
                    pid:11,
                    pinyin:'eqew',
                    type:'1',
                    children:{0:{
                        fullName:'1234',
                        id:1111,
                        level:4,
                        name:'AA区县1',
                        pid:111,
                        pinyin:'eqew',
                        type:'1',
                    },1:{
                        fullName:'1234',
                        id:1112,
                        level:4,
                        name:'AA区县2',
                        pid:111,
                        pinyin:'eqew',
                        type:'1',
                    },2:{
                        fullName:'1234',
                        id:1113,
                        level:4,
                        name:'AA区县3',
                        pid:111,
                        pinyin:'eqew',
                        type:'1',
                    }},
                }}
            }}
       },1:{
           fullName:'1234',
           id:2,
           level:1,
           name:'B省',
           pid:0,
           pinyin:'eqew',
           type:'1',
           children:{0:{
               fullName:'1234',
               id:22,
               level:2,
               name:'B市',
               pid:2,
               pinyin:'eqew',
               type:'1',
               children:{0:{
                   fullName:'1234',
                   id:222,
                   level:3,
                   name:'B区县',
                   pid:22,
                   pinyin:'eqew',
                   type:'1',
                   children:{0:{
                       fullName:'1234',
                       id:2222,
                       level:4,
                       name:'BB区县1',
                       pid:222,
                       pinyin:'eqew',
                       type:'1',
                   },1:{
                       fullName:'1234',
                       id:2223,
                       level:4,
                       name:'BB区县2',
                       pid:222,
                       pinyin:'eqew',
                       type:'1',
                   },2:{
                       fullName:'1234',
                       id:2224,
                       level:4,
                       name:'BB区县3',
                       pid:222,
                       pinyin:'eqew',
                       type:'1',
                   }},
               }}
           }}
       }}

   }
  },
 computed:{
     address_system:function(){
         return this.pickdata.area1.name+this.pickdata.area2.name+this.pickdata.area3.name+this.pickdata.area4.name;
     }
 },
 watch:{
     address_detail:function(val,oldval){
         if(val){
             this.isSuccess3 = true;
             this.isSuccess4 = true;
         }else{
             this.isSuccess3 = false;
             this.isSuccess4 = false;
         }
     },fullname:function(val,oldval){
         if(val){
             this.isSuccess1 = true;
         }else{
             this.isSuccess1 = false;
         }
     },phone:function(val,oldval){
         if(val){
             this.isSuccess2 = true;
         }else{
             this.isSuccess2 = false;
         }
     }
 },
 created:function(){
     this.init();
 },
 methods:{
     init:function(){
         let data = {level:1};
         let id = 0;
         this.getad(data,id);
     },
      getad:function(data,id){
          console.info(data);
          let _this = this;
          let a, b, c;
          this.axios.post('/index.php//index/Address/AddressService.html',data).then((res)=>{
                    console.log(res);
                  if(res.data.code=='SUCCESS'){

                      switch(id) {
                          case 0:
                              _this.arealist = res.data.data;
                              break;
                          case 1:
                              a =  _this.pickdata.area1.index;
                              console.log('索引1：'+a);

                              _this.$set(_this.arealist[a], 'children' , res.data.data);
                              break;
                          case 2:
                              a =  _this.pickdata.area1.index;
                              b =  _this.pickdata.area2.index;
                              console.log('索引2：'+a,b);

                              console.log(_this.arealist[a]['children'][b]);
                              _this.$set(_this.arealist[a]['children'][b], 'children' , res.data.data);
                              break;
                          case 3:
                              a =  _this.pickdata.area1.index;
                              b =  _this.pickdata.area2.index;
                              c =  _this.pickdata.area3.index;
                              console.log('索引3：'+a,b,c);

                              _this.$set(_this.arealist[a]['children'][b]['children'][c], 'children' , res.data.data);
                              break;
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
     close:function(){
         this.showselect=false;
     },
     changearea:function(i,val,e){
         console.log(i);
         console.log(val);
         console.log(e);

         this.pickdata.area1.name = val.name;
         this.pickdata.area1.code = val.id;
         this.pickdata.area1.index = i;

         let id = 1;
         this.getad({pid:this.pickdata.area1.code},id);

         this.pickdata.area2.name = '请选择市';
         this.showarea = 2;


     },
     changearea2:function(i,val,e,a){
         console.log(i);
         console.log(val);
         console.log(e);
         console.log('pi:'+a);

         this.pickdata.area2.name = val.name;
         this.pickdata.area2.code = val.id;
         this.pickdata.area2.index = i;

         let id = 2;
         this.getad({pid:this.pickdata.area2.code},id);

         this.pickdata.area3.name = '请选择区县';
         this.showarea = 3;

     },
     changearea3:function(i,val,e,a,b){
         console.log(i);
         console.log(val);
         console.log(e);
         console.log('pi:'+a,b);

         this.pickdata.area3.name = val.name;
         this.pickdata.area3.code = val.id;
         this.pickdata.area3.index = i;

         let id = 3;
         this.getad({pid:this.pickdata.area3.code},id);

         this.pickdata.area4.name = '请选择街道';
         this.showarea = 4;

     },
     changearea4:function(i,val,e,a,b,c){
         console.log(i);
         console.log(val);
         console.log(e);
         console.log('pi:'+a,b,c);

         this.pickdata.area4.name = val.name;
         this.pickdata.area4.code = val.id;
         this.pickdata.area4.index = i;

         this.showselect= !this.showselect;


     },

     test1:function(){
         console.log(2);
     }
},


 }
</script>

<style lang="scss" scoped>
.withdrawal{
 background:#f2f2f2;
 font-size:12px;
 min-height:94vh;
}

.grybox{
    width:100%;
    height:100vh;
    background:rgba(0,0,0,.6);
    position:fixed;
    top:0;
    z-index:999;
}
.alerttitle{
    position:relative;
    line-height:30px;
    font-size:12px;
    color:#666;
    i{position:absolute;top:5px;right:10px;;z-index:9; font-size:18px;}
}
.kongblock{
    position:fixed;
    top:0;
    z-index:9999;
    width:100%;
    height:50vh;
}

.adressselectbox{
    position:fixed;
    bottom:0;
    z-index:9999;
    width:100%;
    height:50vh;
    overflow-y:scroll;

    background:#fff;
    .selectnamebox{
        height:50px;
        border-bottom:1px solid #ddd;
        box-sizing:border-box;
        padding:0 10px;
        i{line-height:50px; margin-top:0;  width:10%;display:inline-block; float:left;}
        .topselectresult{
            width:88%;
            overflow-x:scroll;
            display:flex;
            flex-direction:row;
            align-items:stretch;
            flex-wrap: nowrap;
            line-height:50px;
            justify-content:space-between;
            span{
                margin-right:2px;
                b{
                    padding:10px 10px;
                    color:#999;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    ;
                }
                &:hover,&.hover{
                     border-bottom:2px solid #f40000;
                    b{color:#f40000;}
                }

            }
        }

    }

    .adresslistbox{
        /*height:calc(44vh-30px)!important;*/
        height:39vh!important;
        overflow-y:scroll;
        .onedata{
            width:100%;
            line-height:30px;
            text-align:left;
            text-indent:20px;
            i{display:none;}
            >div{
                &.hover{background:#eee;
                    i{
                        display:inline-block;
                        color:#f40000;
                    }
                }
             }

        }
    }
}
.withdrawalform{
        margin-top:50px;
        padding-top:10px;

     .linebox{
          display:flex;
          flex-direction: row ;
          align-items: center;
          justify-content: space-between;
         width:100%;
         box-sizing:border-box;
         padding:0 20px;
         background:#fff;
         border-bottom:1px solid #f2f2f2;
         line-height:50px;

        .el-icon-success{
            &.success{
                 color:#4c8e37;
             }
        }

         em{
          font-style:normal;
          color:#a4a4a4;
         }
         label{width:20%; text-align:left; font-size:14px;
            &.w100{width:40%;}
         }
         input{width:50%; text-indent:14px;}
         span{
           width:30%;
           i{
            float:right;
            color:#f4f4f4;
               &.el-icon-arrow-right{
                    color:#a5a5a5;
                    font-size:20px;
                }
           }
           button{
            border:none;
            width:100%;
            line-height:30px;
            border-radius:50px;
            color:#f79c97;
            background:#fbfbfb;
            &.success{
              color:#ea1c10;
             }
           }
       }


     }
}

.lineboxtwo{
    display:flex;
    flex-direction: row ;
    align-items: center;
    width:100%;
    box-sizing:border-box;
    padding:0 20px;
    background:#fff;
    border-bottom:1px solid #f2f2f2;
    line-height:50px;
    label{
        flex:1;
        line-height:50px;
        text-align:left;
    }

}
.btnbox{
    margin-top:20px;
}

</style>