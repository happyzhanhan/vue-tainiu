<template>

  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="scss">
body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,p,form,input,button{margin:0;padding:0;}
body,button,input,textarea{color:#333;font: 14px/1.4 'Helvetica Neue','Hiragino Sans GB','WenQuanYi Micro Hei','Microsoft Yahei',sans-serif;}
h1,h2,h3,h4,h5,h6 { font-weight: normal;}
input{outline:0 none;}
img,input{border:none;}
img{max-width: 100%;vertical-align: top;}
ul, ol{list-style:none;}
i{font-style:normal;}
button,input[type="button"],input[type='submit']{cursor:pointer;}
a{color:#222;text-decoration: none;cursor:pointer;}
a:hover{color:#ec584e;}
a:focus,button:focus,input:focus {outline: 0}
b,em,strong{font-weight:normal;font-style:normal;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #fff;
}
a{
  color:#cd2f23;
  text-decoration:none;
}
button,input{
  outline:none;
}

.tips{
  color:#cd2f23;
  line-height:30px;
  text-align:left;
  width:100%;
  margin:0 auto;
  box-sizing:border-box;
  padding:0 20px;
}
.btnbox{
  box-sizing:border-box;
  padding:0 20px;

    button{
      width:100%;
      border-radius:50px;
      background:#f99c97;
      color:#fff;
      border:none;
      font-size:14px;
      line-height:40px;
      outline:none;
    &.success{
       background: -webkit-gradient(linear, left top, left bottom, from(#f82116), to(#c91002));
       background: -moz-linear-gradient(top,  #f82116,  #c91002);
       filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#f82116', endColorstr='#c91002');
       background:#ea1c10;

     }
    }
}

.lineboxtext{
  background:#fff;
  display:flex;
  flex-direction: row ;
  align-items: center;
  justify-content: space-between;
  line-height:40px;
  padding:0 20px;
  box-sizing:border-box;
  border-bottom:2px solid #fafafa;
}

.location{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing:border-box;
  padding:10px;
  border-bottom:1px solid #f4f4f4;
  color:#676767;
  >p{
     display:flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     box-sizing:border-box;
   }

span{
  text-align:left;
  font-size:14px;
p{
b{
  text-align:left;
}
em{
  float:right;
  font-style:normal;
}
}

&:nth-child(1){
   width:15%;
   text-align:center;
i{
  font-size:20px;
  text-align:center;
}
}
&:nth-child(2){
   width:85%;
   float:left;
   text-align:left;
 }
}
}

  .mt-30{
    margin-top:30px;
  }
  .mt-80{
    margin-top:80px;
  }


.black{
  width:200px!important;
  min-width:200px!important;
  top:200px!important;
}


.el-cascader{width:80%!important;border:none;}
.el-cascader .el-input, .el-cascader .el-input__inner{border:none!important;}

.el-message-box{width:220px!important;}

 .fadeIn{
     animation-delay:0.2s;
     -webkit-animation-delay:0.2s;
 }
</style>
