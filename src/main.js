import Vue from "vue";
import Vuex from 'vuex'
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    user: state => {
      return state.user
    },
  }
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
