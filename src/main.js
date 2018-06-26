// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
/*import 'element-ui/lib/theme-chalk/index.css'*/ /*原样式*/
import 'element-ui/lib/ygtheme/index.css'
import resource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(resource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,
  components: { App },
  template: '<App/>'
})
