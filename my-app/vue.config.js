module.exports = {
  pluginOptions: {
    // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/guide.html
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
      },
      // List native deps here if they don't work
      // externals: ['my-native-dep'],
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: ["../../node_modules", "./node_modules"],
      // Node integration
      nodeIntegration: true,
      // Preload files
      preload: "src/preload.js",
    },
  },
  transpileDependencies: ["vuetify"],
};
