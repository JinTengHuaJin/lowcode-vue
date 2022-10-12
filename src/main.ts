import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import ElementPlus from 'element-plus';
import router from "./router"
import '@/common/css/custom-common.css'; // 在element-plus之前引入，防止样式覆盖
// import 'element-plus/theme-chalk/index.css';
import '@/elementPlusStyle/index.css';
import '@/common/css/index.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.mount("#app");

// export function render() {
//   document.getElementById("app")!.innerHTML = "main";
// }
// render();

// if (import.meta.hot) {
//   import.meta.hot.accept((updatedModule) => updatedModule.render());
// }