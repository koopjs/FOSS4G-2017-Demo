const Koop = require('koop')
const wfs = require('@koopjs/output-wfs')
const googleSheets = require('@koopjs/provider-google-sheets')
const config = require('config')


const koop = new Koop()
koop.register(wfs)
koop.register(googleSheets)

koop.server.listen(config.port)
