### 全院胎监信息系统

#### vscode 插件

```
  1. gitLens
  2. Prettier - Code formatter
```

#### 项目目录结构

```
  │──config //配置文件
  │  ├─config.ts // umi 相关配置文件
  │  ├─proxy.ts // 代理配置文件
  │  ├─routes.ts // 路由配置文件
  │──src
  │  ├─.umi // 项目启动时
  │  ├─assets // 静态资源文件
  │  ├─commonless // 公用的样式文件（需要手动引入）
  │  ├─components // 公共组件
  │  ├─layouts // 布局
  │  │  ├─basicLayout // 基础布局
  │  │  │  ├─foot // 尾部组件
  │  │  │  ├─header // 头部组件
  │  │  │  └─index.tsx // 首页基础布局
  │  │  ├─userLayout // 用户页布局
  │  │  │  └─index.tsx
  │  ├─pages // 业务页面
  │  │  ├─cockpit // 驾驶舱
  │  │  ├─deviceManagement // 设备管理
  │  │  ├─fetalHeartMonitoring // 胎监档案
  │  │  ├─home // 实时监护
  │  │  ├─scientificResearchData // 科研数据
  │  │  ├─setting // 设备管理
  │  │  └─user // 用户页面
  │  │      └─login // 登录页
  │  └─utils // 工具类
    └─hooks // 钩子类工具类
  │  ├──app.tsx // umi配置（菜单配置、请求配置等）
  │  ├──global.less // 全局样式（不需要手动引入）
  │──eslint.js // 代码格式配置
  │──.prettierrc // 格式化代码配置
  │── commitlint.config.cjs // 提交代码规范配置
  │── package.json
```

#### 项目规范

##### 命名规范

```
  1、
```

- 安装 Prettier - Code formatter
- 提交代码 先用命令格式化代码

```
yarn commit //执行这段命令 会对我们代码进行一次格式化，检查eslint等一系列操作
```

如下所示

- 然后安装正常流程进行拉取代码、推代码即可
