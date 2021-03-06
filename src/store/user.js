import * as fb from 'firebase/firebase'
import router from '@/router/index.js'

export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user){
      state.user = user
    }
  },
  actions: {
    async REGISTRATION_USER({commit}, {email, password}){
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('SET_USER', user.user)
        router.push('/')
      } catch (error) {
        commit('ERROR_MESSAGE', error)
        setTimeout(() => {
          commit('CLEAR_ERROR')
        }, 2000)
      }
    },
    async LOGIN_USER({commit}, {email, password}) {
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('SET_USER', user.user)
        router.push('/')
      } catch (error) {
        commit('ERROR_MESSAGE', error)
        setTimeout(() => {
          commit('CLEAR_ERROR')
        }, 2000)
      }
    },
    AUTO_LOGIN_USER({commit}, user){
      commit('SET_USER', user)
    },
    LOGOUT_USER({commit}){
      fb.auth().signOut()
      commit('SET_USER', null)
      router.push('/login')
    },
  },
  getters: {
    user: state => state.user,
    isLoggedUser: state => state.user !== null
  }
}