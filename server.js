const express = require('express')
const serveStatic = require('serve-static')
const app = require('path')

const app = express()


app.use('/',serveStatic(path.join(__dirname,'/dist')))

const port = process.env.PORT || 8888
app.listen(port)

console.log('listening on port'+port)