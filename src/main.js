import { createApp } from "vue";
import App from "./App.vue";
// Bootstrap staat niet hier maar in public/index.html (via een CDN-link)

// start de app: App.vue komt in het element met id="app" (staat in public/index.html)
createApp(App).mount("#app");
