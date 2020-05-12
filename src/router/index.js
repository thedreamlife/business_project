import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    }

]

const router = new VueRouter({
        routes
    })
    // 路由导航守卫控制访问权限
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    if (!window.sessionStorage.getItem('token'))
        return next('/login')
    next()
})

export default router