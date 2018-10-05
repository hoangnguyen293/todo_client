import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'

import Home from '../components/index.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'
import Signup from '../components/signup.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/signup', component: Signup },
  ],
})
