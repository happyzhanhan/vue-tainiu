<!--
 * Created by happy<1659725767@qq.com> on 2018/6/27 19:18.
 -->

<template>
    <div class="tainiubox">
        <tnhead :headname="headname" :headstyle="headstyle"></tnhead>
        <div class="adresslistbox">
            <div class="fixed">
                <div class="tabnav">
                    <ul>
                        <li :class="{'hover':msgtype==''}" @click="msgtype=''">系统消息</li>
                        <li :class="{'hover':msgtype==3}" @click="msgtype=3">订单消息</li>
                        <li :class="{'hover':msgtype==1}" @click="msgtype=1">平台消息</li>
                    </ul>
                </div>
            </div>

            <div class="showno  animated fadeIn" v-if="msgnum==0 || msgnum==null">
                <img src="../assets/noimg.jpg" alt="空数据" width="50%" style="margin-top:50px;"/>
                <p>没有数据哦！~</p>
            </div>
            <div class="tabcontent" >
                <div  v-for="msg in msglist">
                    <div class="messageone" v-if="msg.type==msgtype || msgtype==''">
                        <div class="leftmsgbox">
                            <img :src="msg.tx_pic_url" alt=""/>
                        </div>
                        <div class="rightbox">
                            <div class="colbox">
                                <div class="rowbox">
                                    <span><h4>{{msgtypyname(msg.type)}}</h4><p>{{msg.add_time}}</p></span>
                                    <span v-if="msg.link!=''&& msg.link != null && msg.link !='null' "><a :href="msg.link">详情{{msg.link}}▶</a></span>
                                </div>
                                <div class="grybox">
                                    <h3>{{msg.title}}</h3>
                                    <p>{{msg.content}}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import tnhead from '@/components/Head.vue';

    export default{
        name: 'Message',
        components: {tnhead},
        data()
        {
            return {
                headname: '消息管理',
                headstyle: 'whitetop',
                uid:1,
                msgnum:0,
                msgtype:0,
                msglist:{

                },
            }
        },
        created:function(){
            this.getuid();
            this.getmessage();
        },
        methods:{
            getuid(){
                let persondata=JSON.parse(localStorage.getItem("TAINIUPERSON"));
                if(persondata){
                    this.uid =  persondata['id'];
                }else{
                    this.$router.push({path:'/login'})
                }
            },
            getmessage:function(){
                    let _this = this;
                    let data = {receiver_uid:this.uid,};
                    this.axios.post('/index.php/index/Message/MessageSelectService.html',data).then((res)=>{
                        if(res.data.code=='SUCCESS'){
                        _this.msglist = res.data.data;
                        _this.msgnum = res.data.num;
                    }else{
                        this.$message({
                            message: '错误：'+res.data.message,
                            type: 'error',
                            customClass:'black'
                        });
                    };
                },(res)=>{
                    this.$message({
                        message: '系统错误！',
                        type: 'error',
                        customClass:'black'
                    });
                })
            },
            msgtypyname:function(msg){

                switch(msg){
                    case '0': return '平台消息';
                        break;
                    case '1': return '系统消息';
                        break;
                    case '2': return '发货消息';
                        break;
                    case '3': return '买家消息';
                        break;
                    default:return '其他消息';
                }
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

    .tabnav{
        wiidth:100%;
    ul{
        width:100%;
        display:flex;
        flex-direction: row ;
        align-items: stretch;
        justify-content: space-around;
    li{
        width:33.33%;
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


  .messageone{
      margin-top:5px;
      margin-bottom:5px;
      background:#fff;
      display:flex;
      flex-direction: row ;
      justify-content: space-between;
      padding:10px 20px;
      box-sizing:border-box;
        .leftmsgbox{
            padding:5px 15px 0 0;
            img{
                width:24px!important;
                max-width:24px!important;
                height:24px!important;

            }

        }
      .rowbox{
          width:100%;
          display:flex;
          flex-direction: row ;
          align-items: center;
          justify-content: space-between;
          text-align:left;
      }
      .colbox{
          display:flex;
          flex-direction: column;
          justify-content: space-between;
          .grybox{
              background:#f5f5f5;
              border-radius:4px;
              text-align:left;
              padding:10px;
              h3{
                  font-size:14px;
                  text-align:left;
              }
              p{
                  color:#535353;
                  text-align:left;
              }
          }
      }
      .rightbox{
        width:90%;
          h4{
              font-size:14px;
          }
          p{
              font-size:10px;
              color:#9d9d9d;
          }
      }
  }

    .tabcontent{
        background:none;
    }
</style>