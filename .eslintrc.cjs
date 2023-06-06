module.exports = {
  root: true,
  ignorePatterns: ['dist/**/*', 'node_modules/**/*'],
  extends: ['prettier'],
  overrides: [
    {
      files: ['src/**/*.ts', 'test/**/*.ts'],
      plugins: [
        '@typescript-eslint',
      ],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
