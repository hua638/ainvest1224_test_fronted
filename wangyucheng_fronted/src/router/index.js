import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import learn1 from '../views/learn1.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/learn1",
    name: "learn1",
    component: learn1
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
