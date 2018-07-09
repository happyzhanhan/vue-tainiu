<template>
  <div>
    <div class="Myshownot animated fadeIn" v-show="!haspermissions">
      <router-link to="/login" > <big class="animated wobble"><i class="el-icon-warning"></i></big></router-link>
      <h2>您没有权限访问该系统</h2>
      <h6>—— 请联系管理员开通权限 ——</h6>
      <p style="margin-top:50px;">联系电话：<a href="tel:057156581013">0571-56581013</a>、<a href="tel:18757101741">18757101741</a></p>
      <p>权限修改后需要重新登录，<router-link to="/login" ><el-button type="text">立即登录</el-button></router-link></p>
    </div>
    <div class="My">
      <div class="mytop" >
        <span class="pright" ><router-link to="/set" ><img src="../assets/icon-set.png" alt=""> </router-link></span>
        <div class="onepart">
          <div class="leftbox">
              <span>
                <router-link to="/setpersonal" ><img src="../assets/tx.png" alt=""/></router-link>
              </span>

              <span class="roler">
                {{person['rolername']}}
              </span>
          </div>
          <div class="rightbox">
            <h3>{{person['username']}} </h3>
            <p>
              <b>我的ID:{{uid}}</b><input type="hidden" v-model="turl" />
              <button type="button"
                      v-clipboard:copy="turl"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError"><i><img src="../assets/icon-link.png" alt=""></i> <b>复制推广链接</b></button>
            </p>
          </div>
        </div>
        <div class="twopart">
          <div class="left">
            <b>待提现利润：￥</b>
            <big>0.00</big>
          </div>
          <div class="right">
          <span class="withdraw">
            <router-link to="/withdrawal">提  现</router-link>
          </span>
          </div>
        </div>
      </div>

      <div class="listbox">
        <div class="block">
          <router-link to="/send">
            <p>待发订单</p>
            <em>{{ordernumber}}</em>
            <span>发货</span>
          </router-link>
        </div>
        <div class="block">
          <router-link to="/reserve">
            <p>个人订货</p>
            <em>0</em>
            <span>订货</span>
          </router-link>
        </div>
        <div class="block">
          <router-link to="/myteamorder">
            <p>团队订单</p>
            <em>0</em>
            <span>查看</span>
          </router-link>
        </div>
      </div>

      <div class="btnlistbox" >
        <div class="linebtn">
          <span class="btnblock">
            <router-link to="/wallet">
              <i><img src="../assets/icon-01.png" alt=""/></i>
              <b>我的钱包</b>
            </router-link>
          </span>
          <span class="btnblock">
            <router-link to="/send">
              <i><img src="../assets/icon-02.png" alt=""/></i>
              <b>我的派单</b>
            </router-link>
          </span>
          <span class="btnblock">
            <router-link to="/order">
              <i><img src="../assets/icon-03.png" alt=""/></i>
              <b>我的订单</b>
            </router-link>
          </span>
          <span class="btnblock">
            <router-link to="/myteamorder">
              <i><img src="../assets/icon-04.png" alt=""/></i>
              <b>团队订单</b>
            </router-link>
          </span>
        </div>
        <div class="linebtn">
          <span class="btnblock">
            <router-link to="/myteam">
              <i><img src="../assets/icon-05.png" alt=""/></i>
              <b>我的团队</b>
            </router-link>
          </span>
          <span class="btnblock">
            <router-link to="/recommend">
              <i><img src="../assets/icon-06.png" alt=""/></i>
              <b>我要推荐</b>
            </router-link>
          </span>
          <span class="btnblock">
            <router-link to="/message">
              <i><el-badge :value="messagenumber" class="item" :hidden="messagenumber==0"><img src="../assets/icon-07.png" alt=""/></el-badge></i>
              <b>我的消息</b>
            </router-link>
          </span>
          <span class="btnblock">
            <router-link to="/adresslist">
              <i><img src="../assets/icon-08.png" alt=""/></i>
              <b>地址管理</b>
            </router-link>
          </span>
        </div>
      </div>

      <div class="advbox">
        <router-link to="/reserve">
          <img src="../assets/go.gif" alt="" />
        </router-link>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'My',
    data () {
      return {
        uid: '0',
        person:{
          username:'木有用户名',
          rolerid:1,
          rolername:'区域代理'
        },
        haspermissions:true,
        messagenumber:0,
        ordernumber:0,
      }
    },
  computed:{
    turl:function(){
      return 'http://tainiu.yggx.com/index.php/index/index/index#/register?tid='+this.uid;
    },
  },
    methods:{


       getuid(){
          let persondata=JSON.parse(localStorage.getItem("TAINIUPERSON"));

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
        },
        getallorderlist:function(){
          let _this = this;
          let data = {uid:this.uid,};
          this.axios.post('/index.php/index/oder/OderSellerListService.html',data).then((res)=>{
            if(res.data.code=='SUCCESS'){
            let arraylist = res.data.data;
                let orderlist = arraylist.filter(function(item){
                return item.status=='PAY_WAIT_TAKE';   //待接单状态的数组
              });
              _this.ordernumber = orderlist.length;
          }else{
            this.$message({
              message: '待接单数量获取失败：'+res.data.message,
              type: 'error',
              customClass:'black'
            });
          };
        },(res)=>{
          this.$message({
            message: '请检查网络是否通畅？',
            type: 'error',
            customClass:'black'
          });
        })
      },
        getmessage:function(){
          let _this = this;
          let data = {receiver_uid:this.uid,};
          this.axios.post('/index.php/index/Message/MessageSelectService.html',data).then((res)=>{
              if(res.data.code=='SUCCESS'){
                    let newmsgnum = res.data.num;
                    let msgnum=JSON.parse(localStorage.getItem("MESSAGENUM"));
                    if(msgnum==undefined){
                      msgnum = 0;
                    }
                    if(newmsgnum-msgnum >0){
                        _this.messagenumber = newmsgnum-msgnum;
                    }else{
                        _this.messagenumber = 0;
                    }


              }else{
                this.$message({
                  message: '消息获取失败：'+res.data.message,
                  type: 'error',
                  customClass:'black'
                });
              };
          },(res)=>{
            this.$message({
              message: '请检查网络是否通畅？',
              type: 'error',
              customClass:'black'
            });
          })
      },
     /* getallorderlist:function(){
        let _this = this;
        let data = {};
            this.axios.post('/index.php/index/oder/OderBuyerListService.html',data).then((res)=>{
              if(res.data.code=='SUCCESS'){
                  let orderlist = res.data.data;
                  var myDate = new Date();
                 let yearnum = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
                 let monthnum = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
                 let daynum =  myDate.getDate(); //获取当前日(1-31)


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
*/


    },
    created:function(){
      this.getuid();
      this.getmessage();
      this.getallorderlist();
     // this.getallorderlist();
    },

  }
</script>

<style lang="scss" scoped>

  .wobble{
    animation-iteration-count:infinite;
  }
  .Myshownot{
    position:fixed;
    top:0;
    z-index:99999999999999999999;
    width:100vw;
    height:100vh;
    display:block;
    background:rgba(24,23,29,0.92);
    color:#fff;
  text-align:center;
  a{dispaly:block;
    big{
      background:#fff;
      width:98px;
      height:99px;
      border-radius:50%;
      display:block;
      margin:160px auto 60px;
      i{font-size:100px; color:#ab1214;}
    }
  }
    p{
    }
    h2{
      font-size:25px;
    }
    h6{
      font-size:16px;
      line-height:24px;
    }

  }
  .My{
    position:relative;
    background:#f2f2f2;
    height:100vh;
    /*background:url('../assets/my.png') no-repeat;*/ /*测试用*/
    background-size:100%;
  }

  .mytop{
    position:relative;
    width:100%;
    background:url('../assets/mybg.jpg') #ff5134 no-repeat; /*测试用*/
    background-size:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .pright{
      position:absolute;
      top:10px;
      right:14px;
      img{
        width:20px;
        height:20px;
      }
    }
    .onepart{
      width:100%;
      box-sizing:border-box;
      padding:20px 16px;
      .leftbox{
        float:left;
        postion:relative;
        span{
          img{
            width:56px;
            height:56px;
          }
        }
        .roler{
          position:absolute;
          top:60px;
          left:16px;
          z-index:1;
          width:56px;
          height:auto;
          background:url('../assets/roler.png') no-repeat;
          background-size:100%;
          font-size:10px;
          line-height:18px;
          color:#fff;
          text-align:center;
        }
      }
      .rightbox{
        padding-left:10px;
        color:#fff;
        display: flex;
        flex-direction: column;
        h3{
          text-align:left;
          font-size:18px;
          margin-top:6px;
          font-weight:600;
        }
        p{
          float:left;
          font-size:12px;
          b{
            float:left;
            margin-top:2px;
          }
          button{
            border:none;
            background:rgba(0,0,0,0.2);
            border-radius:50px;
            line-height:16px;
            float:left;
            margin-left:20px;
            padding:0 10px;

            i{float:left;
              margin-top:5px;
              margin-right:3px;
              img{
                width:10px;
                height:10px;
              }

            }
            b{
              font-size:12px;
              line-height: 16px;
              color:#fff!important;
            }
          }
        }
      }
    }
    .twopart{
      width:100%;
      box-sizing:border-box;
      padding:0 20px 36px;

      .left{
       color:#fff;
       float:left;
      line-height:30px;
        b{font-size:12px;}
        big{
          font-size:20px;
          font-weight:600;
        }
      }
      .right{
        float:right;
        margin-top:6px;
        .withdraw{
          a{
            background:#fcebbd;
            font-size:12px;
            border-radius:50px;
            padding:3px 20px;
            font-weight:600;
          }
        }
      }
    }
  }

  .listbox{
    position:absolute;
    top:136px;
    width:96%;
    margin-left:2%;
    background:#fff;
    border-radius:15px;
    display:flex;
    flex-direction: row ;
    align-items: stretch;
    justify-content: space-around;
    box-sizing:border-box;
    padding:8px 0;
    .block{
      display:flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-around;
      position:relative;
      width:100%;
      height:100%;
      padding:10px;

     a{
       padding:10px;
       font-size:12px;
     }
     a:hover{
       background:#eee;
     }

      &:after{
          position:absolute;
          right:-2px;
          content:'';
          width:1px;
          height:100px;
          display:inline-block;
          background:#eee;

       }
      &:nth-child(3){
          &:after{ display:none;}
       }
      p{
        width:100%;
        color:#000;
      }
      em{
        width:100%;
        display:block;
        color:#d9160b;
        font-size:14px;
        font-style:normal;
        font-weight:600;
        margin-top:3px;
      }
      span{
        border:1px solid #d9160b;
        color:#d9160b;
        border-radius:50px;
        padding:1px 15px;
        margin-top:10px;
        font-size:10px;
        line-height:18px;
        display:inline-block;
      }
    }
  }

  .btnlistbox{
    position:absolute;
    top:270px;
    width:96%;
    margin-left:2%;
    background:#fff;
    border-radius:15px;
    padding:10px 0;
    box-sizing:border-box;
    .linebtn{
      width:100%;
      margin-bottom:8px;/*
      dispaly:flex;*/
      flex-direction: column;
      align-items: stretch;
      justify-content: space-around;
      float:left;
      .btnblock{
        width:25%;
        float:left;
        a{
        display:block;
          &:hover{
            background:#eee;
           }
          i{
            width:100%;
            text-align:center;
            display:inline-block;
            padding:12px 0;
            img{
              width:24px;
              height:24px;
              display:inline-block;
            }
          }
          b{
            width:100%;
            display:inline-block;
            font-size:12px;
            line-height:10px;
            color:#666;
          }
        }
      }
    }
  }


  .advbox{
    position:absolute;
    top:436px;
    width:96%;
    margin-left:2%;
    margin-top:10px;
    background:#fff;
    border-radius:15px;
    overflow:hidden;
    a{
      img{
        width:100%;
      }
    }
  }
</style>
