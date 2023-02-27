import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  mfsu: {},
  initialState: {},
  request: {},
  layout: {
    title: '全院胎监项目'
  },
  proxy: proxy[process.env.REACR_APP_ENV || 'dev'],
  routes,
  npmClient: 'pnpm'
});
