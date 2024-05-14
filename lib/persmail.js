var extract = require('ekstrakt')
var domains = require('../data/domains.json')
var names = require('../data/names.json')
var roots = require('../data/roots.json')
var company = require('../data/company.json')

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
  if (!email) return false
  var [prefix, tld] = email.split('@')
  return (
    !roots.find((x) => tld.includes(x)) &&
    !company.find((x) => prefix.includes(x)) &&
    !!names.find((x) => prefix.includes(x))
  )
}

module.exports = { domains, host, has, sendable, personal }
