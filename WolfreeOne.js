email = Math.random().toString(36).slice(2) + '@gmail.com'
await fetch('/login/create', {
  'method': 'POST',
  'headers': {
    'content-type': 'application/x-www-form-urlencoded'
  },
  'body': `
    & email = ${email}
    & firstName = ${email}
    & lastName = ${email}
    & password = ${email}
    & passwordConfirm = ${email}
    & accountAgreement = true
    & access =
    & _csrf = ${$('[name="_csrf"]').value}
  `.replace(/\s/g, '')
})
await fetch('/api/access/wolfram-one/trial', {
  'method': 'POST',
  'headers': {
    'content-type': 'application/json'
  },
  'body': `{
    "classification": "Student",
    "goal": "FIRST_TIME",
    "agreement": true
  }`
})
location = '/products/wolfram-one'
