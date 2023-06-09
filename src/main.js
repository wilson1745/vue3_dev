import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount("#app");
const vm = createApp(App, {
  // 實體所回傳的狀態會以物件 key-value 的形式
  // 且在 Vue 3.0 開始，data 將強制以 function 的形式出現
  data() {
    return { name: "008JS" };
  }
});

vm.mount("#app");
