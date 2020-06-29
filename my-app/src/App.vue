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
          Route: {{ route.name }} {{ route2.path }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import os from "os";

import { Vue } from "vue-property-decorator";
import { Route } from "vue-router";
import Vuetify from "vuetify/lib";

import HelloWorld from "./components/HelloWorld.vue";

// eslint-disable-next-line
declare var window: any;

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
  },

  data: function () {
    let route = this.$route as Route;
    return {
      os: {
        arch: os.arch(),
        cpus: os.cpus().length,
        platform: os.platform(),
        release: os.release(),
      },
      route: {
        name: route.name,
        path: route.path,
      },
      versions: {
        electron: window.versions.electron,
        chrome: window.versions.chrome,
        node: window.versions.node,
        vue: Vue.version,
        vuetify: Vuetify.version,
      },
    };
  },

  computed: {
    route2() {
      return { name: this.$route.name, path: this.$route.path };
    },
    freemem(): number {
      return os.freemem();
    },
    totalmem(): number {
      return os.totalmem();
    },
    usedmem(): number {
      return this.totalmem - this.freemem;
    },
  },

  methods: {
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
    },
  },
});
</script>
