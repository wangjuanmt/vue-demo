# vue-demo

> A Vue.js project

## install and init
``` bash
# install npm
brew install npm

# install cnpm - 安装淘宝镜像，用cnpm代替npm,依赖全 速度快
npm install -g cnpm --registry=https://registry.npm.taobao.org

# install webpack
cnpm install webpack -g

# install vue-cli - vue脚手架
npm install vue-cli -g

# test if vue-cli is successfully installed
vue -V 
which vue

# into target project path (blank)
cd ...

# init vue project - 根据模板创建项目
vue init webpack vueDemo
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
