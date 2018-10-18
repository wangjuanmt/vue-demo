# vue-demo

> A Vue.js project

## Install and init
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

## Build setup

``` bash
# install dependencies
npm install

# 如果创建好的vue项目里没有 vue-router 路由依赖需要自行添加，如果创建项目时添加过了，可以省略
npm install vue-router --save

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

## Add element-ui
#### Add packages to package.json. 
``````
    "element-react": "^1.4.21",
    "element-theme-chalk": "^2.4.8",
    "element-theme-default": "^1.4.13",
    "element-ui": "^2.4.8",
``````
If need, lock the package versions in package-lock.json.

#### Import element-ui and element theme in main.js
``````
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
``````

#### Try some element-ui example in HelloWorld.vue
Add the following example into div.

``````
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
``````

#### Restart web page
```bash
# install element dependencies
npm install --save element-ui element-react element-theme-chalk element-theme-default
# restart
npm run dev
```

Now we can see a row of buttons below the HelloWorld page. These buttons are the same as the first row in http://element-cn.eleme.io/#/zh-CN/component/button.

## Construction
-- Script start entry : package.json
    <- build/webpack.dev.conf.js 
    <- build/webpack.base.conf.js
    <- src/main.js  // 所有前端的入口

-- 所有前端的入口 : src/main.js
    <- src/App.vue

-- 所有前端的入口 : src/main.js
    <- src/router/index.js //加载路由

-- 所有前端的入口 : src/main.js
    <- 加载vue, element-ui, etc.

## Add axios to request http
```bash
# install axios
npm install --save axios
# restart
npm run dev
```
If directly request in fe using axios.get(`https://api.douban.com/v2/movie/top250?count=10`), it will happen CORS issue, with exception: 
Failed to load https://api.douban.com/v2/movie/top250?count=10: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.

