const express = require('express')
const routerr = express.Router()

const infoRoute = require('./infoRoute')
const favNewsRoute = require('./favNewsRoute')
routerr.use('/favNews',require('./favNewsRoute'))
routerr.use('/user',require('./infoRoute'))

module.exports = routerr