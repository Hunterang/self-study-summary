const db = require('./libs/database');
const http = require('./libs/chhtp')

const { addRouter } = require('./libs/routers');

addRouter('get','/list',async (res,get,post,file)=> {
  let rel = await db.query('select * from class where id = 1221')
  console.log(rel);
  res.setHeader('content-type','application/json')
  res.write(JSON.stringify(rel))
  res.end()
})
