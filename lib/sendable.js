const domains = require('../data/domains.json')
const parse = require('./parse.js')

module.exports = function sendable(doc) {
  const { host } = parse(doc)
  return !!host && !domains.includes(host)
}
