/**
 * Extends interfaces in Vue.js
 */
import Vue from "vue";
import Api from "../index";

declare module "vue/types/vue" {
  interface Vue {
    $api: Api;

    // main.ts
    //  Vue.prototype.$window = window;
    $window: Window;
  }
}

// https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
// https://stackoverflow.com/questions/51469620/why-doesnt-typescript-recognize-module-augmentation-for-a-vue-plugin
// https://www.mistergoodcat.com/post/vuejs-plugins-with-typescript
// https://github.com/vuejs/vetur/issues/1423
