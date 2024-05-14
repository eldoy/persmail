var persmail = require('../../index.js')

it('should be requirable', ({ t }) => {
  t.ok(typeof persmail.domains == 'object')
  t.ok(typeof persmail.host == 'function')
  t.ok(typeof persmail.has == 'function')
  t.ok(typeof persmail.sendable == 'function')
})

it('should extract host', ({ t }) => {
  var host = persmail.host('vidar@example.com')
  t.ok(host == 'example.com')

  host = persmail.host('Vidario')
  t.ok(host == '')

  host = persmail.host('Vidar <vidar@example.com>')
  t.ok(host == 'example.com')
})

it('should show has with host in list', ({ t }) => {
  var result = persmail.has('gmail.com')
  t.ok(result === false)
})

it('empty should not be sendable', ({ t }) => {
  var result = persmail.sendable('')
  t.ok(result === false)
})

it('valid email should be sendable', ({ t }) => {
  var result = persmail.sendable('vidar@example.com')
  t.ok(result === true)
})

it('invalid email should not be sendable', ({ t }) => {
  let result = persmail.sendable('vidar@yahoo.co.uk')
  t.ok(result === false)

  result = persmail.sendable('vidar@gmail.com')
  t.ok(result === false)
})

it('personal email should be personal', ({ t }) => {
  var result = persmail.personal('vidar@example.com')
  t.ok(result === true)
})

o('company email should not be personal', ({ t }) => {
  var result = persmail.personal('post@example.com')
  t.ok(result === false)
})
