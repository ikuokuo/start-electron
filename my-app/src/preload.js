// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.versions = {};
for (const type of ["chrome", "node", "electron"]) {
  window.versions[type] = process.versions[type];
}

import { ipcRenderer } from "electron";
window.ipcRenderer = ipcRenderer;
