import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 2,
      'jsx-quotes': [2, 'prefer-single'],
      'quotes': [2, 'single'],
      'curly': [2, 'multi-line'],
      'no-console': 1,
      'react/jsx-boolean-value': 2,
      'react/jsx-no-undef': 2,
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/jsx-wrap-multilines': 2,
      'react/no-did-mount-set-state': 2,
      'react/no-did-update-set-state': 2,
      'react/no-unknown-property': 2,
      'react/self-closing-comp': 2,
    },
  },
);
