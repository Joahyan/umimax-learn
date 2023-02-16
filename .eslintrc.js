module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    camelcase: [0, { ignoreDestructuring: true, properties: 'never' }]
  }
};
