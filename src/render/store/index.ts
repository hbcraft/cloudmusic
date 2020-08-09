import Vue from 'vue'
import Vuex from 'vuex'
import history, { pushHistory, forwardHistory, backHistory } from './history'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    // 历史记录
    history
  },
  mutations: {
    pushHistory,
    forwardHistory,
    backHistory
  },
  actions: {
  },
  modules: {
  }
})
