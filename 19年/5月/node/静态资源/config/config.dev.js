const path = require('path')

module.exports = {
  DB_HOST: '192.168.1.93',
  DB_PORT: '3306',
  DB_USER: 'root',
  DB_PASS: '111111',
  DB_NAME: 'speedmonitor',

  HTTP_PORT: '8080',
  HTTP_ROOT: path.resolve(__dirname,'../static/'),
  HTTP_UPLOAD: path.resolve(__dirname,'../static/upload/')
}
