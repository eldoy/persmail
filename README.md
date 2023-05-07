# Persmail

Contains a list of free email services typically used to find out if an email address is personal or not.

### Install

```
npm i persmail
```

### Usage

```js
const { domains } = require('persmail')

// Check of domains includes your email address host
const host = 'hello@example.com'.split('@')[1]
if (domains.includes(host)) {
  // is personal email
}
```

Created by [Eldøy Projects.](https://eldoy.com)

MIT Licensed. Enjoy!

