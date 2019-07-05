import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            // path: '/index',
            // name: '首页',
            // component: resolve => require(['@/views/index/index1.vue'], resolve),
            // redirect: '/index/indexBody',
            // children: [{
            //     path: 'indexBody',
            //     name: '',
            //     meta: {
            //         requireNews: true,
            //         requireBanner: true
            //     },
            //     component: resolve =>
            //         require(['@/views/index-body/index-body.vue'], resolve),
            // }]
        }
    ]
})