import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router