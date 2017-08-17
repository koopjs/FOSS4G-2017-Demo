const Koop = require('koop')
const wfs = require('@koopjs/output-wfs')
const vectorTiles = require('@koopjs/output-vector-tiles')
const googleSheets = require('@koopjs/provider-google-sheets')
const config = require('config')

const koop = new Koop()
koop.register(vectorTiles)
koop.register(wfs)
koop.register(googleSheets)

module.exports = koop.server
