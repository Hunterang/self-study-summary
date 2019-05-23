const process = require('process')



module.exports = {
  mode: 'develoup', //根据mode加载相应的配置


  ...(mode == 'develoup' ? require('config.dev.js'): require('config.prod.js'))
}
