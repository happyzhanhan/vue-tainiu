// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
/*import 'element-ui/lib/theme-chalk/index.css'*/ /*原样式*/
import 'element-ui/lib/ygtheme/index.css'
import animate from 'animate.css'
import resource from 'vue-resource';
import axios from 'axios';
import VueClipboard from 'vue-clipboard2';

Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(resource);
Vue.use(VueClipboard)

//console.log(Vue.prototype);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,
  axios,
  components: { App },
  template: '<App/>'
})
