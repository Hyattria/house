const path = require('path')
const webpackCli = require('webpack')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')

module.exports = ({ webpack, builtDirectory }) => {
  var spinner = ora('building for production...')
  spinner.start()

  rm(path.join(builtDirectory + '/*'), err => {
    if (err) throw err
    webpackCli(webpack, function (err, stats) {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      console.log(chalk.cyan('  Build complete.\n'))
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
      ))
    })
  })
}
