const process = require('process')


let mode =   'develop'
module.exports = {
  mode, //根据mode加载相应的配置


  ...(mode == 'develop' ? require('./config.dev.js'): require('./config.prod.js'))
}
