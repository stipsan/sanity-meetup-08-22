module.exports = {
  root: true,
  ignorePatterns: require('eslint-gitignore').readGitignoreFiles({
    cwd: __dirname,
  }),
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
}
