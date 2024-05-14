var extract = require('ekstrakt')
var domains = require('../data/domains.json')
var names = require('../data/names.json')

var company = ['post', 'firma']

function host(email) {
  email = extract.emails(email || '')[0] || ''
  return email.toLowerCase().split('@').reverse()[0]
}

function has(host) {
  return !!host && !domains.some((x) => host.endsWith(x))
}

function sendable(email) {
  return has(host(email))
}

function personal(email) {
  email = extract.emails(email || '')[0] || ''
  var prefix = email.split('@')[0]
  return (
    !company.find((x) => prefix.includes(x)) &&
    !!names.find((x) => prefix.includes(x))
  )
}

module.exports = { domains, host, has, sendable, personal }
