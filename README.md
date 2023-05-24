# Persmail

Contains a list of free email services typically used to find out if an email address is personal or not.

### Install

```
npm i persmail
```

### Usage

```js
const persmail = require('persmail')

// Check of domains includes your email host
if (persmail.domains.includes('gmail.com')) {
  // is personal email
}

// Get the host from an email address
const host = persmail.host('vidar@example.com')
// host is 'example.com'

// Check if host is in domains
const sendable = persmail.has(host)

// Check complete email address, short cut for method above
if (persmail.sendable('vidar@example.com')) {
  // email address is not in the domains list
}
```

Created by [Eldøy Projects.](https://eldoy.com)

MIT Licensed. Enjoy!

