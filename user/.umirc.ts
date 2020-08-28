import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: 'user',
  qiankun: {
    slave: {}
  },
  routes: [
    { path: '/', component: '@/pages/userList' },
    { path: '/:userId', component: '@/pages/userDetail' },
  ],
});
