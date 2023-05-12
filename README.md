# Persmail

Contains a list of free email services typically used to find out if an email address is personal or not.

### Install

```
npm i persmail
```

### Usage

```js
const { domains, host, sendable } = require('persmail')

// Check of domains includes your email host
if (domains.includes('gmail.com')) {
  // is personal email
}

// Get the host from an email address
const h = host('vidar@example.com')
// h is 'example.com'

// Check complete email address
if (sendable('vidar@example.com')) {
  // email address is not in the domains list
}
```

Created by [Eldøy Projects.](https://eldoy.com)

MIT Licensed. Enjoy!

