# Electron App with Vue.js, Vuetify

## Preparation

### Visual Studio Code

Download here: https://code.visualstudio.com/.

```bash
$ code -v
1.46.1
cd9ea6488829f560dc949a8b2fb789f3cdc05f5d
x64
```

Install extensions:

* ESLint
* Prettier - Code formatter
* Vetur
* Vue 2 Snippets (Optional to see snippets)

### Node.js

Download here: https://nodejs.org/en/download/.

It's recommended to select `Latest LTS Version`, since Electron v9 is still using Node.js v12.

```bash
$ node -v
v12.18.1

$ npm -v
6.14.5
```

### Yarn

GitHub: https://github.com/yarnpkg/yarn

```bash
npm config set registry https://registry.npm.taobao.org
npm install -g yarn
```

```bash
$ yarn -v
1.22.4
```

### Vue CLI

GitHub: https://github.com/vuejs/vue-cli

```bash
yarn global add @vue/cli
```

```bash
$ vue -V
@vue/cli 4.4.6
```

## Create a Vue.js App

```bash
vue create my-app
```

My setup:

```bash
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
? Pick the package manager to use when installing dependencies: Yarn
```

```bash
$ cat ~/.vuerc
{
  "useTaobaoRegistry": true,
  "packageManager": "yarn"
}
```

Start the app:

```bash
cd my-app
yarn serve
```

Open `http://localhost:8080/` in your browser:

![](images/5_my_app.png)

## References

* [electron-app](https://github.com/bromix/vue-examples/tree/master/electron-app)
