import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import Log from '../views/log.vue'
import stuForth from '../views/stuforth.vue'
import tecForth from '../views/tecforth.vue'
import stuBan from '../views/stuban.vue'
import tecBan from '../views/tecban.vue'
import tecFirst from '../views/tecfirst.vue'
import tecThird from '../views/tecthird.vue'
import tecSecond from '../views/tecsecond.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {
        path: '/',
        component: Log,
        children:[
          {
            path: '/',
            component:() => import('../views/student.vue')
          },
          {
            path: 'administrator',
            component:() => import('../views/administrator.vue')   
          }
        ]
      },
      {
        path: 'register',
        component: () => import('../views/register.vue')
      },
      {
        path: 'student',
        component: stuBan,
        children:[
          {
            path: '',
            component: () => import('../views/stufirst.vue')
          },
          {
            path: 'stusecond',
            component: () => import('../views/stusecond.vue')
          },
          {
            path: 'third',
            component: () => import('../views/third.vue')
          },
          {
            path: 'stuforth',
            component: stuForth,
            children:[
              {
                path: 'my',
                component: () => import('../views/my.vue')
              },
              {
                path: 'password',
                component: () => import('../views/password.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'teacher',
        component: tecBan,
        children:[
          {
            path: '',
            component: tecFirst,
            children: [
              {
                path: '',
                component: () => import('../views/classtable.vue')
              },
              {
                path: 'assignclass/:id',
                component: () => import('../views/assignclass.vue')
              }
            ]
          },
          {
            path: 'tecsecond',
            component: tecSecond,
            children: [
              {
                path: '',
                component: () => import('../views/classmessage.vue')
              },
              {
                path: 'postoneclassroom',
                component: () => import('../views/postoneclassroom.vue')
              },
              {
                path: 'getclassroomtimeinfo',
                component: () => import('../views/classroomtimeinfo.vue')
              }
            ]
          },
          {
            path: 'third',
            component: tecThird,
            children: [
              {
                path: '',
                component: () => import('../views/allusersinfo.vue')
              },
              {
                path:'putuser/:id',
                component: () => import('../views/edituser.vue')
              },
              {
                path:'postoneuser',
                component: () => import('../views/postoneuser.vue')
              }
            ]
          },
          {
            path: 'tecforth',
            component: tecForth,
            children:[
              {
                path: 'my',
                component: () => import('../views/my.vue')
              },
              {
                path: 'password',
                component: () => import('../views/password.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
