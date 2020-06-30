<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>

    <v-footer app>
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          Vue {{ versions.vue }}, Vuetify {{ versions.vuetify }}, Electron
          {{ versions.electron }}, Chromium {{ versions.chrome }}, Node.js
          {{ versions.node }}
        </v-col>
        <v-col class="text-center" cols="12">
          OS: {{ os.platform }} {{ os.release }} {{ os.arch }}, CPUS:
          {{ os.cpus }}, MEM: {{ ((100 * usedmem) / totalmem).toFixed() }}%
          {{ readableBytes(usedmem, 2, false) }}/{{ readableBytes(totalmem) }}
          <v-divider class="mx-1" vertical></v-divider>
          Route: {{ route.name }} {{ route.path }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import os from "os";
import process from "process";

import { Vue, Component } from "vue-property-decorator";
import { Route } from "vue-router";
import Vuetify from "vuetify/lib";

// Property '$api' does not exist on type 'App'. Vetur(2339)
import {} from "./types/api";

import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: { HelloWorld },
})
export default class App extends Vue {
  os = {
    arch: os.arch(),
    cpus: os.cpus().length,
    platform: os.platform(),
    release: os.release(),
  };

  versions = {
    // electron: this.$window.versions.electron,
    // chrome: this.$window.versions.chrome,
    // node: this.$window.versions.node,
    electron: process.versions.electron,
    chrome: process.versions.chrome,
    node: process.versions.node,
    vue: Vue.version,
    vuetify: Vuetify.version,
    api: { one: this.$api.one },
  };

  get route(): { name: string; path: string } {
    const route = this.$route as Route;
    return { name: route.name as string, path: route.path };
  }

  get freemem(): number {
    return os.freemem();
  }

  get totalmem(): number {
    return os.totalmem();
  }

  get usedmem(): number {
    return this.totalmem - this.freemem;
  }

  readableBytes(
    bytes: number,
    digits = 2,
    unit: boolean | string = true
  ): string {
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const size = (bytes / Math.pow(1024, i)).toFixed(digits);
    if (typeof unit === "boolean") {
      const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      return unit ? `${size} ${units[i]}` : size;
    } else if (typeof unit === "string") {
      return `${size}${unit}`;
    } else {
      throw new Error(`unit expected boolean | string, got '${unit}'`);
    }
  }
}
</script>
