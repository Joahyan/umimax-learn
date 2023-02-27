// 运行时配置

import {
  history,
  RequestConfig,
  RunTimeLayoutConfig,
  useLocation,
  useModel
} from '@umijs/max';
import { InitialStateType } from './.umi/plugin-initialState/@@initialState';
import { LOGIN_URL } from './utils/utils';

export type InitialState = {
  collapsed: boolean;
};

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(
  props: InitialState
): Promise<{ name: string; collapsed?: boolean }> {
  return { name: 'joahyan', collapsed: props.collapsed };
}

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  const location = useLocation();
  let collapsed = initialState?.collapsed;
  const { setInitialState } = useModel('@@initialState');
  // 初始化执行两次是因为路由到指定页面也会执行一次
  // TODO: 登录页不需要菜单栏
  if (location.pathname === '/user/login') {
    return {
      menuRender: () => false,
      headerRender: () => false,
      // headerContentRender: () => false,
      fixedHeader: () => false
    };
  }

  // 菜单页面
  return {
    // logo: <div></div>,
    // siderWidth: 150,
    // TODO:左下角图标，用户名配置
    // rightRender(initialState, setInitialState, runtimeConfig) {
    //   return <>rightRender</>;
    // },
    rightRender() {
      return <>{initialState?.name}</>;
    },
    headerRender: true,
    style: {},
    menu: {
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      params: initialState
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
    //   console.log({ item, defaultDom, menuProps });
    //   // return <div style={{ width: '80px', height: '80px', border: '1' }}>{defaultDom}</div>;
    // },

    // 折叠按钮配置，及折叠方法设置
    collapsed,
    collapsedButtonRender: false,
    onCollapse: () => {
      setInitialState({
        ...initialState,
        collapsed: !initialState?.collapsed
      } as InitialStateType);
    }
    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};

// 与后端约定的响应数据格式
interface ResponseStructure {
  success?: boolean;
  data: any;
  code?: number;
  message?: string;
}

/**
 * TODO:和后端定义好字段值，token等鉴权方式
 * request 配置
 */
export const request: RequestConfig = {
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; chartset=UTF-8'
  },

  errorConfig: {
    errorThrower: (res: ResponseStructure) => {
      const { success, data, code, message } = res;
      if (!success) {
        const error: any = new Error(message);
        error.name = 'BizError';
        error.info = { code, message, data };
        throw error; // 抛出自制的错误
      }
    },
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          // return errorInfo;
          let code = errorInfo.code;
          switch (code) {
            case 400:
              break;
            case 401:
              history.push(LOGIN_URL);
              break;
            case 403:
              history.push(LOGIN_URL);
              break;
            case 404:
              break;
            case 200:
              return errorInfo;
            default:
              break;
          }
        }
      }
    }
  }
};
