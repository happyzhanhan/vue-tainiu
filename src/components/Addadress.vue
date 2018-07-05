<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 15:10.
 -->
<template>
 <div class="withdrawal">
  <div class="withdrawalhead">
    <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
   </div>

  <div class="grybox animated fadeIn"  v-show="showselect">
      <div class="kongblock" @click="showselect = !showselect">

      </div>
      <div class="adressselectbox animated fadeInUp">
          <h4 class="alerttitle"><b>选择收货地址</b><i class="el-icon-close" @click="showselect = !showselect"></i></h4>
          <div class="selectnamebox">
              <div class="topselectresult">
                <span :class="currentChooseCityIndex==index?'hover':''" @click="switchChooseCity(index)"  v-for="(area,index) in chooseCity" >
                    <b>{{area.name}}</b>
                </span>
              </div>

          </div>


          <div class="adresslistbox">
              <div class="onedata" v-for="(area,index) in arealist"  >
                <div :class=" chooseCity[currentChooseCityIndex] != undefined && area.id == chooseCity[currentChooseCityIndex].id ?'hover':''" v-show="true" @click="chooseArea(index,area,$event)">
                    <p>{{area.name}} <i class="el-icon-check"></i></p>
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
                <h6>{{address_system}}</h6>
                <span><i class="el-icon-arrow-right"></i></span>

            </div>
            <div class="linebox">
                <label for="name">详细地址</label>
                <input type="text" placeholder="街道、小区、门牌号等" v-model="address_detail"/>
                <span><i class="el-icon-success" :class="{'success':isSuccess3}"></i></span>
            </div>
            <div class="lineboxtwo" v-if="this.$route.query.type == 'add'">
                <el-radio v-model="addr_type" label="0">收货地址</el-radio>
                <el-radio v-model="addr_type" label="1">发货地址</el-radio>
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
            <button :class="{'success':isSuccess4}" @click="postad">保   存</button>
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
       uid:1,
        headname:'新增地址',
        headstyle:'whitetop',
       isSuccess1:false,
       isSuccess2:false,
       isSuccess3:false,
       isSuccess4:false,

       id:0,
       fullname:'',
       phone:'',
       //address_system:'',
       address_detail:'',
       addr_type:'0',
       default_addr:true,
       showselect:false,

       showarea :1,
       currentChooseCityIndex:0,
       chooseCity:[
           /*{
               id:15,
               name:"内蒙古自治区",
           },
          {
               id:1505,
               name:"通辽市",
           },
           {
               id:150523,
               name:"开鲁县",
           }*/
       ],

       arealist:[

       ],
       areaCache:{},
   }
  },
 computed:{
     address_system:function(){

         let fulladdress='';
         for(var i in this.chooseCity){
             fulladdress += this.chooseCity[i].name;
         }
         return fulladdress;
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
         this.getuid();  //获取用户名
         this.getupdatedata();
         this.getad(data); //获取省份


     },
     getuid(){
         let persondata=JSON.parse(localStorage.getItem("TAINIUPERSON"));
         console.log(persondata['id']);
         if(persondata){
            this.uid =  persondata['id'];
         }else{
             this.$router.push({path:'/login'})
         }
     },
     getupdatedata(){
         if(this.$route.query.type == 'update'){
             let typename = '';
             if(this.$route.query.addr_type == 0){
                 typename = '收货';
             }else{
                 typename = '发货';
             }
             this.headname = '修改'+typename+'地址';

             this.axios.post('/index.php/index/Address/AddressSelectService.html',{id:this.$route.query.id,uid:this.uid}).then((res)=>{
                 if(res.data.code=='SUCCESS'){
                    console.info('获取单条数据:');
                    console.log(res.data.data);
                         this.id = res.data.data[0].id;
                         this.fullname = res.data.data[0].fullname;
                         this.phone = res.data.data[0].phone;
                         this.chooseCity = [
                            {
                                id:res.data.data[0].area1_code,
                                name:res.data.data[0].area1_name,
                            },
                             {
                                 id:res.data.data[0].area2_code,
                                 name:res.data.data[0].area2_name,
                             },
                             {
                                 id:res.data.data[0].area3_code,
                                 name:res.data.data[0].area3_name,
                             },
                             {
                                 id:res.data.data[0].area4_code,
                                 name:res.data.data[0].area4_name,
                             },
                             {
                                 id:res.data.data[0].area5_code,
                                 name:res.data.data[0].area5_name,
                             }
                         ];

                         this.address_detail = res.data.data[0].address_detail;
                         this.addr_type = res.data.data[0].addr_type;

                         if( res.data.data[0].default_addr == 1){
                             this.default_addr = true;
                         }else{
                             this.default_addr = false;
                         }

                }else{
                     this.$message({
                         message: '请求失败：'+res.data.message,
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
             })
         }else{
             return;
         }
     },
      getad:function(data){
          var cacheKey = JSON.stringify(data);
          var cacheData = this.areaCache[cacheKey]
          if(cacheData != undefined && cacheData.length >0){
              this.setAreaList(cacheData);
              return ;
          }
          console.info(data);
          let _this = this;
          let a, b, c;
          this.axios.post('/index.php/index/Address/AddressService.html',data).then((res)=>{
                    console.log(res);
                  if(res.data.code=='SUCCESS'){


                      if(res.data.data.length == 0){
                          _this.showselect=false;
                          return;
                      }
                      this.areaCache[cacheKey] = res.data.data;
                            if(_this.chooseCity[_this.currentChooseCityIndex] == undefined){
                                _this.$set(_this.chooseCity,_this.currentChooseCityIndex,{
                                    name:"请选择",
                                });
                            }
                      _this.setAreaList(res.data.data);
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
     setAreaList:function(areaList){

         this.arealist = areaList;
     },
    switchChooseCity:function(index){
        console.info('switchChooseCity index',index);
        this.currentChooseCityIndex = index;

        if(index == 0){
            this.getad( {level:1});
        }else{

            var param = {};

            if(this.chooseCity[index].pid > 0){
                param = {pid:this.chooseCity[index].pid};
            }else{
                param = {pid:this.chooseCity[index-1].id};
            }
            this.getad(param);
        }

    },
    chooseArea:function(i,area,e){
        console.log('this.chooseCity 0',this.chooseCity);
        if(area.id == this.chooseCity[this.currentChooseCityIndex].id){
            return;
        }
        this.$set(this.chooseCity,this.currentChooseCityIndex,area);
        console.log('this.chooseCity 1',this.chooseCity);

        var chooseCity = [];
        for(var i in this.chooseCity){
            if (i <= this.currentChooseCityIndex){
                chooseCity.push( JSON.parse(JSON.stringify(this.chooseCity[i])));
            }
        }

        this.chooseCity = chooseCity;
        this.currentChooseCityIndex ++;

        this.getad({pid:area.id});
     },
    postad:function(){
        var reg=11 && /^1[3456789]\d{9}$/ ;
        if(!reg.test(this.phone)){
            this.$message({
                message: '手机格式不正确！',
                type: 'warning',
                customClass:'black'
            });
            return;
        };

        let data = {
            uid:this.uid,
            fullname:this.fullname,
            phone:this.phone,
            address_detail:this.address_detail,
            addr_type:this.addr_type,
            address_system:this.address_system,

        };
        if(this.default_addr){
            data['default_addr'] = 1;
        }else{
            data['default_addr'] = 0;
        }
        for(var i in this.chooseCity){
            let j = parseInt(i)+1;
            data['area'+j+'_code'] = this.chooseCity[i].id;
            data['area'+j+'_name'] = this.chooseCity[i].name;
        }

        console.log(data);

        let _this = this;

        if(_this.$route.query.type == 'update'){
            //更新
            data['id'] = _this.id;
            this.axios.post('/index.php/index/Address/AddressUpDataService.html',data).then((res)=>{
                    console.log(res);
                if(res.data.code=='SUCCESS'){
                    this.$message({
                        message: '请求成功！',
                        type: 'success',
                        customClass:'black'
                    });
                    this.$router.back(-1);
                }else{
                    this.$message({
                        message: '请求错误：'+res.data.messaga,
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
        }else if(_this.$route.query.type == 'add'){
                //新增
                 this.axios.post('/index.php/index/Address/AddressAddService.html',data).then((res)=>{
                     console.log(res);
                 if(res.data.code=='SUCCESS'){
                     this.$message({
                         message: '请求成功！',
                         type: 'success',
                         customClass:'black'
                     });
                     this.$router.back(-1);
                 }else{
                     this.$message({
                         message: '请求错误：'+res.data.messaga,
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
        }



   },

},


 }
</script>

<style lang="scss" scoped>
.withdrawal{
 background:#f2f2f2;
 font-size:12px;
 height:94vh;
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
        height:6vh;
        border-bottom:1px solid #ddd;
        box-sizing:border-box;
        padding:0 10px;
        i{line-height:6vh; margin-top:0;  width:10%;display:inline-block; float:left;}
        .topselectresult{
            width:100%;
            display:flex;
            flex-direction:row;
            align-items:stretch;
            align-content: flex-start;
            flex-wrap: nowrap;
            line-height:6vh;
            justify-content: flex-start;
            span{
                width:20%;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;

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
        margin-top:6vh;
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
                 color:rgb(19, 206, 102);
             }
        }

         em{
          font-style:normal;
          color:#a4a4a4;
         }
         label{width:65px; text-align:left; font-size:14px;
            &.w100{width:100px;}
         }
         input{width:80%; text-indent:14px;}
         h6{
             width:80%;
             text-align:left;
             line-height:20px;
             color:#666;
             box-sizing:border-box;
             padding-left:20px;
             font-size:14px;
         }
         span{

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