const path = require('path')

module.exports = {
  moduleDirectory: path.join(process.cwd(), 'example'),
  sassResources: path.join(process.cwd(), 'example/src/human/config.scss')
}
