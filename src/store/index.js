import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex/dist/vuex.esm'
import task from './modules/task'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    task
  }
})