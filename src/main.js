import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user: state => {
      return state.user;
    }
  }
});
axios.defaults.baseURL = "http://localhost:4001";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
