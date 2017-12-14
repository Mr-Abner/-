import Vue from 'vue'
import Vuex from 'vuex'
// 引入axios
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Abner'
  },
  mutations: {
    newAuthor (state, msg) {
      state.author = 'msg'
    }
  }
})

export default store
