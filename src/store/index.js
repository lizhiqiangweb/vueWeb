import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router/router'

Vue.use(Vuex)

const state = {
  user: ls.getItem('user'),
  // 添加 auth 来保存当前用户的登录状态
  auth: ls.getItem('auth')
}

const mutations = {
  UPDATE_USER(state, user) {
    state.user = user
    ls.setItem('user', user)
  },
  // 添加 UPDATE_AUTH 来更改当前用户的登录状态
  UPDATE_AUTH(state, auth) {
    state.auth = auth
    ls.setItem('auth', auth)
  }
}

const actions = {
  login({ commit }, user) {
    if (user) commit('UPDATE_USER', user)
    commit('UPDATE_AUTH', true)
    router.push('/')
  },
  logout({ commit }) {
    commit('UPDATE_AUTH', false)
    router.push({ name: 'Home', params: { logout: true } })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store