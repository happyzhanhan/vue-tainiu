# tainiu

> element-tainiu

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### 今天新增了axios来请求数据，解决跨域等问题，遇到的坑很多：
#### 关于config 里的index.js的配置
## proxyTable，
> 这个查了很多怎么配怎么配，就是没有变化，最后发现配置中有外层，我是新建的配置，所以没有效果！
> 常见问题：
* 要npm run dev 重启;
* 可以尝试改端口，有缓存的可能；
* 确定拼接起来的域名是可以访问的！

#### 很多翻译怎么安装axios的，没有怎么引用初始化的，太坑了。
> 总是报错：axios is underfind
> 然后终于找到怎么引入的方法了：
* import axios from 'axios'; （什么../node/之类的试了没用）
* 注册到vue的原型里:
```
Vue.prototype.axios = axios;
```
正常这样就可以了，我为了解决跨域的问题，尝试了下面的统一设置访问域名：
```
Vue.prototype.axios = axios.create(/*{
  baseURL:"http://tainiu.yagou.com:8089/",
  timeout:1000,
  headers: {'Content-Type':'application/x-www-form-urlencoded',
    "Access-Control-Allow-Headers":"Authorization,Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods":"GET,POST",
    'Access-Control-Allow-Origin':"*"},
}*/);
```
* 别忘记new vue的时候要加进去：
```
new Vue({
  el: '#app',
  router,
  resource,
  axios,
  components: { App },
  template: '<App/>'
})
```
* 全局注册后，页面组件就可以调用了：
```
this.axios.post('url',data)
.then(function(res){
  console.log(res);
})
.catch(function(err){
  console.log(err);
});
```





