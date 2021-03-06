import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    meta: {
      layout: 'Notfound'
    },
    component: () => import("../layouts/NotfoundLayout.vue")
  },
  {
    path: "/",
    name: "Home",
    meta: {
      layout: 'main'
    },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: 'empty'
    },
    component: () => import("../views/auth/Login.vue")
  },
  {
    path: "/registration",
    name: "Registration",
    meta: {
      layout: 'empty'
    },
    component: () => import("../views/auth/Registration.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      layout: 'main'
    },
    component: () => import("../views/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
