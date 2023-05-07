module.exports = function parse(doc) {
  const website = doc.website || ''
  const name = (doc.name || '').toLowerCase()
  const host = (doc.email || '').split('@').reverse()[0]

  // Last 2 parts
  const base = host.split('.').slice(-2).join('.')

  // Without tld
  const root = base.split('.')[0]

  return { website, name, host, base, root }
}
