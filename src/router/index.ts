import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/antv",
    name: "antv",
    component: () => import("@/views/antv")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router