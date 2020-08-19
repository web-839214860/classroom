import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import('nprogress/nprogress.css')
import { getLocalStorage } from '@/utils/localStorage' // 验权(从localstorage中获取)
import api from './api/apiList'
// import {
//     setTitle
// } from '@/utils/mUtils' // 设置浏览器头部标题

const whiteList = ['/']
router.beforeEach((to, from, next) => {  //路由守卫，进入路由之前要判断
    NProgress.start()
    // 点击登录时，拿到了token并存入了localstorage,保证页面刷新时,始终可以拿到token
    if (getLocalStorage('Token')) {
        if (to.path === '/') {
            next({ path: '/student' })
            NProgress.done()
        } else {
            api.user.userinfo().then(res => {
                console.log(res.data)
                let user = res.data.user; //同步存值 存在mutations中
                store.commit("user/SET_ROLES", user.u_role);
                store.commit("user/SET_NAME", user.u_name);
                store.commit("user/SET_USERID", user.u_id);
                store.commit("user/SET_SEX", user.u_sex);
                store.commit("user/SET_BIRTHDAT", user.u_birthday);
                store.commit("user/SET_POSITION", user.u_position);
                next()
            }).catch((err) => {
                console.log(err)
                store.dispatch('user/LogOut').then(() => { //异步存值
                    next('/')
                })
            })
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            // 点击退出时,会定位到这里
            next()
        } 
        else {
            next('/' &'/administrator') // 否则全部重定向到登录页
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
    // setTimeout(() => {
    //     const browserHeaderTitle = store.getters.browserHeaderTitle
    //     setTitle(browserHeaderTitle)
    // }, 0)
})

