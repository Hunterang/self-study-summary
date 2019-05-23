const mysql = require('mysql')
const co = require('co-mysql')

const {DB_HOST,DB_USER,DB_PASS,DB_PORT,DB_NAME} = require('../config');
const conn = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
})
module.exports = co(conn)
