import Vue from 'vue'
import Router from 'vue-router'

/* layout */
import layout from '@/view/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const asyncRouterMap = [
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }, {
    path: '/error',
    name: '401',
    component: layout,
    redirect: '/error/401',
    hidden: true,
    children: [
      {
        path: '401',
        component: _import('errorPage/401')
      }
    ]
  }, {
    path: '/introduction',
    component: layout,
    redirect: '/introduction/index',
    icon: 'icon-guanliyuan',
    noDropdown: true,
    children: [
      {
        path: 'index',
        component: _import('introduction/index'),
        name: '修改密码'
      }
    ]
  }, {
    path: '/404',
    name: '404',
    component: _import('errorPage/404'),
    hidden: true
  }, {
    path: '/login', // 登录
    name: 'login',
    hidden: true,
    component: _import('login/login')
  }, {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index')
      }
    ]
  }, {
    path: '/axm',
    component: layout,
    redirect: '/axm/list',
    name: '信息管理',
    icon: 'icon-xinxi',
    noDropdown: false,
    children: [
      {
        path: 'list',
        component: _import('axm/list'),
        name: '信息列表'
      },
      {
        path: 'add',
        component: _import('axm/add'),
        name: '信息添加',
        hidden: true
      },
      {
        path: 'edit/:id/:code',
        component: _import('axm/edit'),
        name: '信息更改',
        hidden: true
      },
      {
        path: 'farm/list',
        component: _import('farm/list'),
        name: '农场列表'
      },
      {
        path: 'farm/add',
        component: _import('farm/add'),
        name: '农场添加',
        hidden: true
      },
      {
        path: 'farm/edit/:id',
        component: _import('farm/edit'),
        name: '农场修改',
        hidden: true
      },
      {
        path: 'factory/list',
        component: _import('factory/list'),
        name: '工厂列表'
      },
      {
        path: 'factory/add',
        component: _import('factory/add'),
        name: '工厂添加',
        hidden: true
      },
      {
        path: 'factory/edit/:id',
        component: _import('factory/edit'),
        name: '工厂更改',
        hidden: true
      }
    ]
  }, {
    path: '/walmart',
    component: layout,
    redirect: '/walmart/add',
    name: '追溯管理',
    icon: 'icon-icon-test',
    noDropdown: false,
    children: [
      {
        path: 'add',
        component: _import('walmart/add'),
        name: '沃尔玛管理'
      }
    ]
  }, {
    path: '/census',
    component: layout,
    redirect: '/census/count',
    name: '统计管理',
    icon: 'icon-tongji',
    noDropdown: false,
    children: [
      {
        path: 'count',
        component: _import('census/count'),
        name: '数据汇总'
      }, {
        path: 'detail',
        component: _import('census/detail'),
        name: '访问明细'
      }, {
        path: 'axm',
        component: _import('census/axm'),
        name: '安心码明细'
      }, {
        path: 'index',
        component: _import('census/index'),
        name: '地区明细'
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: asyncRouterMap
})
