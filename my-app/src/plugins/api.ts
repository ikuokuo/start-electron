import _Vue from "vue";
import Api from "@/api/api";

// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
export function ApiPlugin<ApiPlugOptions>(
  Vue: typeof _Vue,
  options?: ApiPluginOptions
): void {
  // do stuff with options
  const api: Api = new Api(1, 2);
  Vue.prototype.$api = api;
  Vue.prototype.$window = options?.window;
  console.log(`api options: ${options}`);
}

export class ApiPluginOptions {
  // add stuff
  window?: Window;
}
