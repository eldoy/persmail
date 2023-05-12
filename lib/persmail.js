const extract = require('ekstrakt')
const domains = require('../data/domains.json')

function host(email) {
  email = extract.emails(email || '')[0] || ''
  return email.toLowerCase().split('@').reverse()[0]
}

function sendable(email) {
  const h = host(email)
  return !!h && !domains.some((x) => h.endsWith(x))
}

module.exports = { domains, host, sendable }
