import { createRouter, createWebHistory } from "vue-router";
import Home from "./modules/home/Home.vue";
import Detail from "./modules/home/Detail.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "movie" },
  },
  {
    path: "/movie",
    name: "movie",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "movie-detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
