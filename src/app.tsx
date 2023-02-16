// 运行时配置

import { useLocation } from '@umijs/max';
import { RunTimeLayoutConfig } from '@umijs/max';
import { ConfigProvider } from 'antd';
import React from 'react';
import { useModel } from '@umijs/max';
import { InitialStateType } from './.umi/plugin-initialState/@@initialState';

export type InitialState = {
  collapsed: boolean;
};

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(props: InitialState): Promise<{ name: string; collapsed?: boolean }> {
  return { name: 'joahyan', collapsed: props.collapsed };
}

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  const location = useLocation();
  // 初始化执行两次是因为路由到指定页面也会执行一次
  // TODO: 登录页不需要菜单栏
  if (location.pathname === '/login') {
    return {
      menuRender: () => false
    };
  }
  let collapsed = initialState?.collapsed;
  const { setInitialState } = useModel('@@initialState');

  // 菜单页面
  return {
    logo: <div></div>,
    siderWidth: 150,
    style: {},
    menu: {
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      params: initialState,
      hideMenuWhenCollapsed: true
      // TODO: 请求获取menu
      // request: async (params, defaultMenuData) => {
      //   // return initialState.menuData;
      //   return Promise.resolve([
      //     {
      //       menu: {
      //         locale: false
      //       }
      //     }
      //   ]);
      // }
    },
    // TODO: 自定义菜单栏
    // menuItemRender(item, defaultDom, menuProps) {
    //   // console.log({ item, defaultDom, menuProps });
    //   return <div style={{ width: '80px', height: '80px', border: '1' }}>{defaultDom}</div>;
    // },
    collapsed,
    onCollapse: () => {
      setInitialState({ ...initialState, collapsed: !initialState?.collapsed } as InitialStateType);
    },

    collapsedButtonRender(collapsed, defaultDom) {
      return <div className='layout-box'>{defaultDom}</div>;
    }
    // actionsRender(props) {
    //   return [<div>actionsRender</div>];
    // }

    // rightContentRender(headerProps, dom, props) {
    //   console.log({ props, headerProps, dom });
    // }
    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};

/**
 * TODO:渲染前添加配置
 * @param container
 * @returns
 */
export const rootContainer = (container: any) => {
  return React.createElement(
    ConfigProvider,
    {
      theme: {
        token: {}
      }
    },
    container
  );
};
