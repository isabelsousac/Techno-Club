import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";
import "semantic-ui-css/semantic.css";
Vue.config.productionTip = false;

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "semantic-ui-css/semantic.css"; // WILL THIS WORK?

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
