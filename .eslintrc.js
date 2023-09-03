module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'i18next',
    "react-hooks",
    "local-plugin"
  ],
  rules: {
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    "i18next/no-literal-string": ['error', {
      markupOnly: true, ignoreAttribute: ['data-testid', 'to', 'role', 'nameStateSchema', 'target', 'justify',
        'align',
        'direction',
        'gap', 'as', 'refName'],
    }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'local-plugin/path-checker': 'error'
  },
  globals: {
    '__IS_DEV__': true,
    '__API__': true,
    React: true,
    '__PROJECT__': true
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off'
      }
    }
  ]
}
