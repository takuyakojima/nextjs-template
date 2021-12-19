module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true,
    node: true,
    worker: true
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'import', 'react', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    lib: ['ESNext', 'WebWorker']
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': ['.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  globals: {
    React: 'writable'
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'error'
  }
}
