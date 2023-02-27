export default [
  {
    path: '/',
    flatMenu: true,
    routes: [
      {
        path: '/user',
        component: '../layouts/userLayout',
        flatMenu: true,
        hideInMenu: true,
        routes: [
          {
            name: '登录',
            path: '/user/login',
            component: './user/login'
          }
        ]
      },
      {
        path: '/',
        component: '../layouts/basicLayout',
        flatMenu: true, // 默认为 false，为 true 时在菜单中只隐藏此项，子项往上提，仍旧展示
        routes: [
          {
            name: '实时监控',
            path: '/home',
            component: './home'
          },
          {
            name: '胎监档案',
            path: '/fetalHeartMonitoring',
            component: './fetalHeartMonitoring'
          },
          {
            name: '科研数据',
            path: '/scientificResearchData',
            component: './scientificResearchData'
          },
          {
            name: '设备管理',
            path: '/deviceManagement',
            component: './deviceManagement'
          },
          {
            name: '驾驶舱',
            path: '/cockpit',
            component: './cockpit'
          },
          {
            name: '系统设置',
            path: '/setting',
            component: './setting'
          }
        ]
      },
      {
        path: '/*',
        component: './404'
      }
    ]
  },
  {
    path: '/*',
    component: './404'
  }
];
