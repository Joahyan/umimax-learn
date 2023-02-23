export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: '登录',
    path: '/login',
    component: './login',
    hideInMenu: true
  },
  {
    name: '首页',
    path: '/home',
    component: './home'
  },
  {
    path: '/*',
    component: './404'
  }
];
