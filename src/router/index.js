import { createRouter, createWebHistory } from "vue-router";

/* Layout */
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const defaultChildRoutes = () => [
  {
    path: "",
    alias: "Home", //讓一個元件回應多個路徑，可使用別名（alias）功能
    name: "Home",
    component: () => import("../views/Home/index.vue"),
    meta: { title: "Home Page" },
  },
  // {
  //   path: "result",
  //   name: "result",
  //   component: () => import("../views/result/index.vue"),
  //   meta: { title: "Result" },
  // },
];

const errorChildRoutes = () => [
  {
    path: "401",
    name: "Page401",
    component: () => import("../views/Error/401.vue"),
    meta: { title: "401" },
  },
  {
    path: "404",
    name: "Page404",
    component: () => import("../views/Error/404.vue"),
    meta: { title: "404" },
  },
];

const routes = [
  {
    path: "/",
    alias: "/web", //讓一個元件回應多個路徑，可使用別名（alias）功能
    name: "Web",
    component: DefaultLayout,
    children: defaultChildRoutes(),
  },
  {
    path: "/originHome",
    name: "OriginHome",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/error",
    name: "ErrorPages",
    component: () => import("../views/Error/404.vue"),
    meta: { title: "Error Pages" },
    children: errorChildRoutes(),
  },
  {
    path: "/:pathMatch(.*)*", // 捕獲所有未匹配的路由
    name: "error404",
    component: () => import("../views/Error/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }), // 切換路由時，頁面滾動置頂
  routes,
});

export default router;
