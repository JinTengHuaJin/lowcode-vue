import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src"),
      '@antv/x6': resolve('node_modules/@antv/x6/dist/x6.js'),
      '@antv/x6-vue-shape': resolve('node_modules/@antv/x6-vue-shape/lib/index.js'),
      'vue': resolve('node_modules/vue/dist/vue.esm-bundler.js')
    }
  },
  base: './', // 设置打包路径
  plugins: [
    vue(),
    vueJsx(),
    // viteMockServe()
  ]
})