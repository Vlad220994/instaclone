module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: 'airbnb',
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'max-len': ['error', { code: 80 }],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'jsx-a11y/label-has-associated-control': [
        2,
        { required: { some: ['nesting', 'id'] } },
      ],
      'no-use-before-define': ['error', { functions: false }],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'ignore',
        },
      ],
      'linebreak-style': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/destructuring-assignment': 'off',
      'jsx-a11y/label-has-for': 'off',
      'import/prefer-default-export': 'off',
      'implicit-arrow-linebreak': 'off',
      'no-plusplus': 'off',
      'object-curly-newline': 'off',
    },
  };
  