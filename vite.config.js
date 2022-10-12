import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src")
    }
  },
  base: './', // 设置打包路径
  plugins: [
    vue(),
    vueJsx(),
    // viteMockServe()
  ]
})