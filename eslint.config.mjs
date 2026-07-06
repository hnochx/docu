import { defineConfig } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

    rules: {
      'no-var': 'error', // var 금지
      'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
      'no-unused-vars': 'off', // 사용하지 않는 변수 금지
      'no-console': 'error', // 콘솔로그 사용 시 에러
      '@typescript-eslint/no-unused-vars': 'error',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
]);
