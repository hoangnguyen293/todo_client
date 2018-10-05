import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/header'
import store from './store/index'

Vue.config.productionTip = false
Vue.component('nav-bar', Header);
new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store
})
