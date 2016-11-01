/**
 * Created by haifeng on 16/10/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  }
})
