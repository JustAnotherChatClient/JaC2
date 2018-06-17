# just-another-chat-client

> An electron-vue project

### Installation

##### Read the docs: https://simulatedgreg.gitbooks.io/electron-vue

```bash
# install yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

# install mongo onubuntu 16.04 & derivaties only: other os check https://docs.mongodb.com/manual/administration/install-community/ for help
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org
# run db
cd <project dir>
yarn run db
```

### Using Yarn

```bash
# add a project dependency from https://npmjs.org
yarn add <name>

# add development dependency
yarn add -D <name>
```

#### Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:9080
yarn start

# build electron application for production
yarn run build

or
# build & run electron application for dev
rm -rf build (optional)
yarn run build:dir
./build/linux-unpacked/JaC2

# run unit & end-to-end tests
yarn test


# lint all JS/Vue component files in `src/`
yarn run lint

```

### Recommended VS Code Plugins
- Vetur
- vscode-icons
- ESLint
---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).


