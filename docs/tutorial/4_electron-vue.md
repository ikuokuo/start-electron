# [Electron Vue](https://github.com/SimulatedGREG/electron-vue)

* [Documentation](https://simulatedgreg.gitbooks.io/electron-vue/)

```bash
npm config set registry https://registry.npm.taobao.org
npm install -g vue-cli yarn

vue init simulatedgreg/electron-vue samples/my-project

cd samples/my-project
yarn  # npm install
yarn run dev  # npm run dev
```

![](images/4_vue_hello.png)

## Issues

### Html Webpack Plugin: ReferenceError: process is not defined

```bash
Html Webpack Plugin:
  ReferenceError: process is not defined

  - index.ejs:11 eval
    [.]/[html-webpack-plugin]/lib/loader.js!./src/index.ejs:11:2

  - index.ejs:16 module.exports
    [.]/[html-webpack-plugin]/lib/loader.js!./src/index.ejs:16:3

  - index.js:284
    [my-project]/[html-webpack-plugin]/index.js:284:18

  - runMicrotasks

  - task_queues.js:97 processTicksAndRejections
    internal/process/task_queues.js:97:5
```

Solution:

* [刚刚下载完依赖，运行时报错](https://github.com/SimulatedGREG/electron-vue/issues/1003)
