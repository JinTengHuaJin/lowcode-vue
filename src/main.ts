import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router"
const app = createApp(App);
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