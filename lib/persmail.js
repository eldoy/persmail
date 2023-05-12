const extract = require('ekstrakt')
const domains = require('../data/domains.json')

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

module.exports = { domains, host, has, sendable }
