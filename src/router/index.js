import Vue from 'vue';
import Router from 'vue-router';
import {
    Message
} from 'element-ui';

Vue.use(Router);

var router = new Router({

    routes: [{
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: '登录',
            component: resolve => require(['@/components/login/login.vue'], resolve),
        },
        {
            path: '/main',
            name: '',
            component: resolve => require(['@/views/main/main.vue'], resolve),
            // redirect: '/main/index',
            children: [{
                path: '/main/index',
                name: '',
                component: resolve => require(['@/views/index/index.vue'], resolve),
            }]
        },
    ],
});

router.beforeEach((to, from, next) => {

    var userInfo = window.localStorage.getItem('personObj'); //获取浏览器缓存的用户信息
    if (userInfo) { //如果有就直接到首页咯
        next();
    } else {

        if (to.path == '/login') { //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            Message({
                message: '您尚未登录',
                type: 'error',
                duration: 5 * 1000
            })
            next('/login');
        }

    }
})
export default router;