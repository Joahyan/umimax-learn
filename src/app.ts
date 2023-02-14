// 运行时配置

import { ConfigProvider } from 'antd';
import React from 'react';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false
    }
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
