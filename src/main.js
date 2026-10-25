import { createApp } from "vue";
import App from "./App.vue";
// het gridsysteem laden we hier, zodat het op de hele site werkt
import "./assets/grid.css";

// start de app: App.vue komt in het element met id="app" (staat in public/index.html)
createApp(App).mount("#app");
