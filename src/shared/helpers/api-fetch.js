import 'isomorphic-fetch'
const host = (process.browser) ? `${window.location.protocol}//${window.location.host}` : 'http://localhost:4000'

export const req = (url, options) => fetch(`${host}/api/${url}`, options)
  .catch((err) => {
    throw new Error(`Failed with error: ${err}`)
  })
