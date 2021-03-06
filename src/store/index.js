import Vue from "vue";
import Vuex from "vuex";
import user from '@/store/user.js'
import error from '@/store/error.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    error
  }
});
