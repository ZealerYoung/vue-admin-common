# pcadmin

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 后台管理系统初始化设置

```bash
> 生产环境的依赖: cnpm i -S axios vuex element-ui qs animate.css echarts normalize.css
> 开发环境的依赖: cnpm i -D less less-loader

> 目录结构：
> src
> ---api
> ------ajax.js 基于 axios 封装 http 请求
> ------index.js 具体业务请求方法
> ---assets 资源文件
> ---components 公用组件
> ---i18n 国际化文件
> -------langs
> ------------cn.js
> ------------en.js
> ------------index.js
> -------i18n.js
> ---router 路由
> -------index.js
> ---store vuex 相关文件夹
> --------state.js vuex 状态
> --------mutaions.js 直接改变 state 的文件
> --------actions.js 通过改变 mutation 间接改变 state
> --------getters.js state 的计算属性
> --------mutaion-types.js 类型
> --------index.js 引用以上文件
> ---common 常用文件文件夹
> ---------styles 公共样式文件夹
> ---------utils 公用 js 文件夹
> ---views 业务界面文件夹
```
