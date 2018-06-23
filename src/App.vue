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
b,em,strong{font-weight:normal;}
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
</style>
