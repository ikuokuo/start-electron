import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $api: Api;
    // main.ts
    //  Vue.prototype.$window = window;
    $window: any;
    // $window: Window;
  }
}

export interface Api {
  [key: string]: any;
}

// https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
// https://stackoverflow.com/questions/51469620/why-doesnt-typescript-recognize-module-augmentation-for-a-vue-plugin
// https://www.mistergoodcat.com/post/vuejs-plugins-with-typescript
// https://github.com/vuejs/vetur/issues/1423
