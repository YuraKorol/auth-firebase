import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from 'vuelidate'
import * as fb from 'firebase/firebase'

Vue.use(Vuelidate)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".appspot.com",
      messagingSenderId: "976518909121",
      appId: "1:976518909121:web:53852936c08b7f0f029840",
      measurementId: "G-L66HEYNC7N"
    })
    fb.auth().onAuthStateChanged(user => {
      if(user) {
        return this.$store.dispatch('AUTO_LOGIN_USER', user)
      }
    })
  },
}).$mount("#app");
