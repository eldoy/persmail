const URL = require('url').URL
const extract = require('ekstrakt')
const { slug } = require('extras')

module.exports = function parse(doc) {
  let website = doc.website || ''
  if (website) {
    if (!website.startsWith('http')) {
      website = `https://${website}`
    }
    let url
    try {
      url = new URL(website)
      website = url.hostname
    } catch (e) {
      website = ''
    }
  }
  const name = slug(doc.name || '').replace(/-/g, '')
  const email = extract.emails(doc.email || '')[0] || ''
  const host = email.split('@').reverse()[0]

  return { website, name, email, host }
}
