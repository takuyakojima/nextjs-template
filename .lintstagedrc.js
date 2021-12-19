module.exports = {
  '*.{js,jsx,ts,tsx,css,sass,scss}': 'prettier --write',
  '**/*.ts?(x)': [() => 'tsc -p tsconfig.json --noEmit', 'eslint'],
  '*.{css,scss,sass}': 'stylelint'
}
