import js from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
    baseDirectory: dirname,
});

export default [
    { ignores: ['dist'] },
    ...compat.extends('airbnb'),
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: {
            react: { version: '18.3' },
            'import/resolver': {
                alias: {
                    extensions: ['.js', '.jsx'],
                    map: [['@', './src']],
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'import/no-extraneous-dependencies': 'off',
            'eslint no-underscore-dangle': 'off',
            'import/prefer-default-export': 'off',
            'react/function-component-definition': 'off',
            'react/prop-types': 'off',
            'prettier/prettier': 'error',
            'react/jsx-props-no-spreading': 'off',
        },
    },
    pluginPrettier,
];
