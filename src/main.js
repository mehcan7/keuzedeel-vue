import { createApp } from "vue";
import App from "./App.vue";
// Bootstrap: de css (grid, knoppen, menu) en de scripts (menu klapt open, slider)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// start de app: App.vue komt in het element met id="app" (staat in public/index.html)
createApp(App).mount("#app");
