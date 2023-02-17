module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    // {} as any 允许
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    // 忽略命名规范
    camelcase: [0, { ignoreDestructuring: true, properties: 'never' }],
    eqeqeq: 0
  }
};
