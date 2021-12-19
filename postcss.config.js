module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        stage: 3,
        autoprefixer: {
          grid: 'autoplace'
        },
        features: {
          'nesting-rules': true
        }
      }
    ]
  ]
}
