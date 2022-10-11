import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router