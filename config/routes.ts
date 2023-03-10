export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: '登录',
    path: '/login',
    component: './Login',
    hideInMenu: true
  },
  {
    name: '首页',
    path: '/home',
    component: './Home'
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access'
  },
  {
    name: 'hooksDemo',
    path: '/hooksDemo',
    component: './HooksDemo'
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table'
  },
  {
    path: '/*',
    component: './404'
  }
];
