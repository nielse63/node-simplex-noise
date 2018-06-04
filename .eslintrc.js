// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root:          true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType:  'module',
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'key-spacing':        ['warn', { align: 'value' }],
    'no-param-reassign':  'off',
    'no-bitwise':         'off',
    'no-mixed-operators': 'off',
    'max-len':            'off',
    'no-plusplus':        'off',
  },
  overrides: [
    {
      files: ['test/**'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['demo/**'],
      env:   {
        browser: true,
      },
      rules: {
        'no-console':      'off',
        'no-multi-assign': 'off',
      },
    },
  ],
};
