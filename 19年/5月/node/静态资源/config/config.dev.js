const path = require('path')

module.exports = {
  DB_HOST: '127.0.0.1',
  DB_PORT: '3306',
  DB_USER: '*****t',
  DB_PASS: '*****',
  DB_NAME: 'speedmonitor',

  HTTP_PORT: '8001',
  HTTP_ROOT: path.resolve(__dirname,'../static/'),
  HTTP_UPLOAD: path.resolve(__dirname,'../static/upload/')
}
