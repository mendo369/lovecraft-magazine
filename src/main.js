import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(pinia);
app.mount("#app");
