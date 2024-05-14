Alternative version for determining personal mails:

```js
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
```