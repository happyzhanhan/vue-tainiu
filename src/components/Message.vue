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
                        <li class="hover">系统消息</li>
                        <li>订单消息</li>
                        <li>平台消息</li>
                    </ul>
                </div>
            </div>
            <div class="tabcontent">
                <div class="messageone">
                    <div class="leftmsgbox">
                       <img src="../assets/icon-10.png" alt=""/>
                    </div>
                    <div class="rightbox">
                        <div class="colbox">
                            <div class="rowbox">
                                <span><h4>系统消息</h4><p>06月10日 16:50</p></span>
                                <span><el-button type="text">详情▶</el-button></span>
                            </div>
                            <div class="grybox">
                                <h3>平台通知</h3>
                                <p>恭喜您成为我平台代理，享受推荐用户人的利润30%，采购价格9折优惠，快来订购吧！</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="messageone">
                    <div class="leftmsgbox">
                        <img src="../assets/icon-11.png" alt=""/>
                    </div>
                    <div class="rightbox">
                        <div class="colbox">
                            <div class="rowbox">
                                <span><h4>系统消息</h4><p>06月10日 16:50</p></span>
                                <span><el-button type="text">详情▶</el-button></span>
                            </div>
                            <div class="grybox">
                                <h3>平台通知</h3>
                                <p>恭喜您成为我平台代理，享受推荐用户人的利润30%，采购价格9折优惠，快来订购吧！</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="messageone">
                    <div class="leftmsgbox">
                        <img src="../assets/icon-12.png" alt=""/>
                    </div>
                    <div class="rightbox">
                        <div class="colbox">
                            <div class="rowbox">
                                <span><h4>系统消息</h4><p>06月10日 16:50</p></span>
                                <span><el-button type="text">详情▶</el-button></span>
                            </div>
                            <div class="grybox">
                                <h3>平台通知</h3>
                                <p>恭喜您成为我平台代理，享受推荐用户人的利润30%，采购价格9折优惠，快来订购吧！</p>
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