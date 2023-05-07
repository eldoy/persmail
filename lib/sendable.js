const domains = require('../data/domains.json')
const parse = require('./parse.js')

module.exports = function sendable(doc) {
  const { website, name, base, root } = parse(doc)
  return (
    !website.includes(root) &&
    !name.includes(root) &&
    !name.split(' ').some((x) => root.includes(x.trim())) &&
    !domains.includes(base)
  )
}
