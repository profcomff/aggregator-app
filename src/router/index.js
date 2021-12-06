import { createRouter, createWebHistory } from "vue-router";
import Hub from "../views/Hub.vue";

const routes = [
  {
    path: "/",
    name: "Hub",
    component: Hub,
  },
  {
    path: "/schedule",
    name: "Schedule",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Schedule.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
