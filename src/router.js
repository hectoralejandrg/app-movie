import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "movie" },
  },
  {
    path: "/movie",
    name: "movie",
    component: () => import('./modules/home/Home.vue'),
  },
  {
    path: "/movie/:id",
    name: "movie-detail",
    component: () => import('./modules/home/Detail.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
