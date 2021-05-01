(async () => {
  'use strict'
  while (true) {
    await fetch('/logout')
    const response = await fetch('/login/create')
    const csrf = new DOMParser()
      .parseFromString(await response.text(), 'text/html')
      .getElementsByName('_csrf')[0].value
    const email = new Date()
      .toJSON()
      .replaceAll('T', '@')
      .replaceAll(':', '.')
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
        & _csrf = ${csrf}
      `.replace(/\s/g, '')
    })
    await fetch('/api/access/wolfram-one/trial')
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
    document.write(email + '<br>')
  }
})()
