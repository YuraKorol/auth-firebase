export default {
  state: {
    error: false,
    errorMessage: ''
  },
  mutations: {
    ERROR_MESSAGE(state, error){
      state.error = true,
      state.errorMessage = error.message
    },
    CLEAR_ERROR(state){
      state.error = false
      state.errorMessage = ''
    }
  },
  actions: {
    CLEAR_ERROR({commit}){
      commit('CLEAR_ERROR')
    }
  },
  getters: {
    error: state => state.error,
    errorMessage: state => state.errorMessage
  }
}