import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import App from "./App.vue";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import { VueQueryPlugin } from "@tanstack/vue-query";
// import { VueQueryPlugin, queryClient } from "./tanstack-query.js";

createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .use(Quasar, {
    plugins: {},
  })
  .mount("#app");
