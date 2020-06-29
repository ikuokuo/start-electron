import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

// https://cn.vuejs.org/v2/guide/typescript.html
// https://class-component.vuejs.org/
// https://github.com/Microsoft/TypeScript-Vue-Starter
// https://zhuanlan.zhihu.com/p/60952007
// https://cloud.tencent.com/developer/article/1552775
