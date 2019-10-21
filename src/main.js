// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

/**
 * 1.elemetui配置
 */
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, {
    size: 'small',
});

/**
 * 2.后台地址
 */
import httpUrl from '@/api/httpUrl.js';
Vue.prototype.$httpUrl = httpUrl;

/**
 * 3.重置浏览器样式,自定义公用样式
 */
import 'normalize.css';
import '@/common/styles/common.css';

/**
 * 4.使用animate动画库
 */
import animate from 'animate.css';
Vue.use(animate);

/**
 * 5.引入axios
 */
import axios from 'axios';
Vue.prototype.$axios = axios;

/**
 * 6.引入vuex
 */
// import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // store,
    components: {
        App,
    },
    template: '<App/>',
});