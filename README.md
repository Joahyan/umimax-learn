### 开发规范

#### vscode 插件配置

- Prettier - Code formatter
- gitLens

#### commitlint（提交前必须安装）

```shell
    pnpm i commitlint @commitlint/cli @commitlint/config-conventional -D
```

#### husky （git-hooks git 格式化代码）

```shell
    pnpm i -D husky
    // 初始化 husky
    npx husky install
    // 代码提交 Demo
    git commit -m feat:代码初始化
```
