import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import jwt_decode from "jwt-decode";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    }
  ],
});

router.beforeEach(async (to, from) => {
  const token = JSON.parse(localStorage.getItem("bruchisBudgetToken"));
  const ts = jwt_decode(token)?.exp;
  if (to.name!== 'login' && (!ts || new Date(ts*1000) < new Date())) {
    console.log("redirecting")
    return {name: 'login'};
  }
});

export default router;
