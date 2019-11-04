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

## Add vue-resource or axios to request http, and resovle CORS issue.
```bash
# install vue-resource
npm install vue-resource --save
# install axios
npm install --save axios
# restart
npm run dev
```
### Resovle CORS issue for localhost
If directly request in fe using axios.get(`https://api.douban.com/v2/movie/top250?count=10`), it will happen CORS issue, with exception: 
Failed to load https://api.douban.com/v2/movie/top250?count=10: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.

因为前后端分离，前端后端使用不同的端口，即使不访问外网，都是localhost，也会出现CORS跨域问题。
localhost不同端口的CORS的解决的办法是(后端代码不变，前端改端口)：
在config/index.js中修改前端占用端口是8080 -> 8081
``````
host: 'localhost',
port: 8081,
``````
另外添加proxyTable:
``````
// Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
            changeOrigin:true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
``````
### Resovle "TypeError: Cannot read property 'total' of undefined" when calling a axios method

Issue:
[Vue warn]: Error in mounted hook: "TypeError: Cannot read property 'total' of undefined"

The error line at MovieList.vue:
``````
getData(size, page) {
      var var1;
      getListInfo(size, page).then(response => {
        var1 = response.data;
      });

      this.totalPages = var1.total;  // Error line
      this.pageSize = var1.count;
      console.log(`每页 ${this.pageSize}条`);
      this.tableData = var1.subjects;
      this.loading = false;
    },
``````
错误原因是：getListInfo是异步axios请求，代码不会等到getListInfo.then运行结束，就会接着运行下面，所以var1还没有值。

解决的办法是：把需要用到response结果的变量放在then体内。如下：
``````
getData(size, page) {
      var var1;
      getListInfo(size, page).then(response => {
        var1 = response.data;
        this.totalPages = var1.total;
        this.pageSize = var1.count;
        console.log(`每页 ${this.pageSize}条`);
        this.tableData = var1.subjects;
        this.loading = false;
      });
    },
``````