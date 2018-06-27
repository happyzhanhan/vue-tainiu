<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 15:10.
 -->
<template>
 <div class="withdrawal">
  <div class="withdrawalhead">
    <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>
   </div>

  <div class="withdrawalform">
     <div class="linebox">
      <label for="name">收件人</label>
      <input type="text" placeholder="请输入收件人姓名"/>
      <span><i class="el-icon-success"></i></span>
     </div>
     <div class="linebox">
      <label for="name">联系方式</label>
      <input type="text" placeholder="请输入收件人手机号"/>
      <span><i class="el-icon-success"></i></span>
     </div>
     <div class="linebox">
      <label for="name">所在地区</label>
      <input type="text" placeholder="选择省市区县"/>
      <span><i class="el-icon-arrow-right"></i></span>
     </div>
     <div class="linebox">
      <label for="name">详细地址</label>
      <input type="text" placeholder="街道、小区、门牌号等"/>
      <span><i class="el-icon-success"></i></span>
     </div>
      <div class="lineboxtwo">
          <el-radio v-model="radio" label="1">收货地址</el-radio>
          <el-radio v-model="radio" label="2">发货地址</el-radio>
      </div>
     <div class="linebox">
         <label class="w100" for="name">设为默认地址</label>
         <el-switch
                 v-model="defaultvalue"
                 active-color="#13ce66"
                 inactive-color="#ff4949">
         </el-switch>
     </div>

   </div>
  <div class="btnbox">
   <button>保   存</button>
  </div>

  </div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
 export default {
  name: 'Withdrawal',
  components: {tnhead},
   data (){
   return {
    headname:'新增地址',
    headstyle:'whitetop',
       defaultvalue:true,
       radio: '1',
   }
  }
 }
</script>

<style lang="scss" scoped>
.withdrawal{
 background:#f2f2f2;
 font-size:12px;
 height:94vh;
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

         em{
          font-style:normal;
          color:#a4a4a4;
         }
         label{width:20%; text-align:left; font-size:14px;
            &.w100{width:40%;}
         }
         input{width:50%;}
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