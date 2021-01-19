import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

import "./css/main.scss";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    tokenBearer: ""
  },
  mutations: {
    setTokenBearer: (state, payload) => {
      state.token = payload;
    }
  }
});

new Vue({
  render: h => h(App),
  store: store
}).$mount("#app");
