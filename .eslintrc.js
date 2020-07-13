module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', {
      "endOfLine":"auto"
    }],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js', '.ts', '.tsx'] }
    ],
    "import/extensions": [0,  "ignorePackages"],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: [".ts", ".tsx"] }],
    'import/prefer-default-export': 'off',
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "global-require": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
};
