export default {
  dev: {
    '/api/sys/': {
      target: 'http://127.0.0.1:8888/',
      changeOrigin: true,
      pathRewrite: { '^': '' }
    }
  }
};
