// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import './directives/index'
import './components/index'
// 引入 store/index.js 的默认值
import store from './store/index'
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'

Vue.use(VueSweetalert2)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
