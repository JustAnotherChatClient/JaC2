#!/bin/bash
set -e

yarn build:server
yarn build:docker
yarn docker:push
yarn deploy:dockerrun
yarn deploy:docker
yarn deploy:eb