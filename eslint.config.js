import react from 'eslint-plugin-react'
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import typescriptParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import { fixupPluginRules } from '@eslint/compat'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/**/*'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['public/*'],
    ...reactRecommended,
    settings: {
      react: {
        version: 'detect',
      }
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      'react-hooks': fixupPluginRules(reactHooks),
    },
    rules: {
      'semi': [1, 'never'],
      'no-trailing-spaces': 1,
      'indent': [1, 2, { SwitchCase: 1 }],
      'comma-spacing': [1],
      'computed-property-spacing': [1, 'never'],
      'key-spacing': [1],
      'no-multi-spaces': [1],
      'no-whitespace-before-property': [1],
      'object-curly-spacing': [1, 'always'],
      'quotes': [1, 'single'],
      'switch-colon-spacing': [1],
      'no-multiple-empty-lines': [1, { max: 1 } ],
      'no-debugger': 'warn',
      'no-unused-vars': 'off',
      'noUnusedLocals': 'off',
      'noUnusedParameters': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    },
  },
]