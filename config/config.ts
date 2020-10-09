import { defineConfig } from 'umi';
import theme from './theme';

export default defineConfig({
  theme,
  proxy: {
    '/api': {
      target: 'http://server-ip:8080/',
      changeOrigin: true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
});
