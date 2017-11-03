module.exports = runner => {
  return {
    $id: 'eslint',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [
      runner.path.join(runner.options.appPath),
      runner.path.join(runner.options.testPath)
    ],
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  }
}