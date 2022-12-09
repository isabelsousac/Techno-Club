import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import Policy from "../views/Policy.vue";
import AdminPage from "../views/AdminPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/policy",
      name: "policy",
      component: Policy,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPage,
    },
  ],
});
