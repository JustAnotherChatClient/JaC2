# just-another-chat-client

> An electron-vue project

### Installation

##### Read the docs: https://simulatedgreg.gitbooks.io/electron-vue

```bash
# install node.js
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

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
yarn db
```

### Using Yarn

```bash
# add a project dependency from https://npmjs.org
yarn add <name>

# add development dependency
yarn add -D <name>
```

#### Commands

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn start

# build electron application for production
yarn build

# build server application for production
yarn build:server

# run unit & end-to-end tests
yarn test

# lint all JS/Vue component files in `src/`
yarn lint

# remove and reinstall dependencies
yarn slate

# run after server and electron application builds
./client/build/linux-unpacked/JaC2
node server/dist/server.bundle.js
```

#### Styling

Bulma is available as a pure css framework.

Docs are found here: https://bulma.io/documentation/

### Amazon

#### Setup

Ensure you have Python and Pip installed

```shell
pip install awscli
pip install awsebcli
```

#### Authentication

Setup a ~/.aws/config file with in the following format:
```
[profile jac2]
region = us-east-1
aws_access_key_id = paste_key_here
aws_secret_access_key = paste_secret_key_here
```
#### Docker Registry with ECR

```shell
# Login
$(aws ecr get-login --no-include-email --region us-east-1)
# Build
yarn docker:build
yarn docker:push
```

#### Elastic-beanstalk deployment

```shell
# Deploy dockerrun if any changes have been made
yarn deploy:dockerrun
# Update the elastic beanstalk environment
yarn deploy:docker
# Actually deploy the new version
yarn deploy:eb
```

### Git Strategy
- branch develop into feature branch
- submit Pull Request (PR) for feature branch into develop
- review PR then accept/merge
- deploy develop to dev environment
- repeat until major release is ready
- merge develop in master
- deploy master to prod environment

### Next Steps
- Add separate client configuration for dev and prod environments
- Add separate server configuration for prod environment
- Docker support
- Figure out packaging for each target: Linux, Mac, Windows
- Learn more about vue
- Begin deploying the server to AWS


### Recommended VS Code Plugins
- Vetur
- vscode-icons
- ESLint
- GitLens
- Node.js Modules Intellisense

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).


