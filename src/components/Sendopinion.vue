<!--
 * Created by happy<1659725767@qq.com> on 2018/6/23 17:59.
 -->

<template>
 <div class="send">
  <div class="sendhead">
   <tnhead :headname="headname" :headstyle ="headstyle"></tnhead>

  </div>

  <div class="sendnone">
    <div class="sendreson">
     <b>请反馈您的意见：</b>
     <textarea placeholder="我们会根据您的反馈优化改进平台！感谢您的支持！" v-model="content"></textarea>
    </div>
    <div class="btnbox">
     <button @click="postopinion" class="success">提交原因</button>
    </div>
  </div>
 </div>
</template>

<script>
 import tnhead from '@/components/Head.vue';
 export default{
  name:'Sendopinion',
  components:{tnhead},
  data(){
   return{
    headname:'用户反馈',
    headstyle:'whitetop',
    uid:0,
    content:'',
   }
  },
  created:function(){
   this.getuid();
  },
  methods:{
       getuid:function(){
           if(localStorage.getItem("TAINIUUID")=='null'|| typeof localStorage.getItem("TAINIUUID") == "undefined" || localStorage.getItem("TAINIUUID") == null || localStorage.getItem("TAINIUROLER") == ""){
            this.$router.push({path:'/login'})
           }else{
            this.uid = localStorage.getItem("TAINIUUID");
           }
       },
       postopinion:function(){
              let data = {
               receiver_uid:40,
               title:'用户反馈',
               content:this.content,
               type:4,
               send_uid:this.uid,
               tx_pic_url:'http://33mimg.oss-cn-hangzhou.aliyuncs.com/tainiu%2Ficon-03.png',
               link:'aaaaaaaaaa'
              }
             console.log(data);
              this.axios.post('/index.php/index/Message/MessageSendService.html',data).then((res)=>{

                 if(res.data.code=='SUCCESS'){
                    this.$message({
                      message: '感谢您的反馈！',
                      type: 'success',
                      customClass:'black'
                    });
                    //console.log(res);
                    this.$router.push({path:'/set'});
                 }

             },(res)=>{
               this.$message({
                 message: '系统错误！',
                 type: 'error',
                 customClass:'black'
               });
              console.log(res);
            });
       },

  }

 }
</script>

<style lang="scss" scodep>
 .send{
  position:relative;
  height:94vh;
  padding-top:6vh;
  background:#f5f5f5;
 }

 .sendnone{
  .sendreson{
   margin-top:5px;
   margin-bottom:100px;
   background:#fff;
  position:relative;
  b{
   position:absolute;
   left:10px;
   top:10px;
  }
   textarea{
    border:none;
    width:100%;
    max-width:100%;
    max-height:160px;
    height:160px;
    text-indent:120px;
    padding:10px;
    box-sizing:border-box;
    outline:none;
   }
  }
 }
</style>