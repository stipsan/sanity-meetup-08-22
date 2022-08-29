module.exports = {
  root: true,
  ignorePatterns: require('eslint-gitignore').readGitignoreFiles({
    cwd: __dirname,
  }),
  plugins: ['simple-import-sort'],
  extends: ['prettier'],
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
}
