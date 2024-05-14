var extract = require('ekstrakt')
var domains = require('../data/domains.json')
var names = require('../data/names.json')

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
  var prefix = email.split('@')[0]
  var parts = prefix
    .replace(/[._]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '')
    .split('-')
    .map((x) => x.trim())

  return parts.some((x) => names.includes(x))
}

module.exports = { domains, host, has, sendable, personal }
