import { defineConfig } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: ts.configs.recommended,
  allConfig: ts.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends('prettier'),

    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: ts.parser,
    },
    rules: {
      'no-var': 'error', // var 금지
      'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
      'no-unused-vars': 'off', // 사용하지 않는 변수 금지
      'no-console': 'error', // 콘솔로그 사용 시 에러
      'react-hooks/exhaustive-deps': 'off',
    },
  },
]);
