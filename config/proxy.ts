export default {
  dev: {
    '/api/sys/': {
      // target: 'http://127.0.0.1:8888/',
      target: 'http://192.168.35.149/',
      changeOrigin: true,
      pathRewrite: { '^': '' }
    }
  }
};
