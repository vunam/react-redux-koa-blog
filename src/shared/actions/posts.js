import Request from 'superagent'
const host = (process.browser) ? '' : ':3000'

const fetchPosts = (page = null) => (
  new Promise((resolve, reject) => {
    Request.get(`${host}/api/posts/latest${page ? `?page=${page}` : ''}`).end((err, res) => {
      if (err) reject(err)
      resolve(res.body)
    })
  })
)

const fetchPostBySeo = (seoName) => {
  return new Promise((resolve, reject) => {
    Request.get(host + '/api/posts/get/' + seoName).end((err, res) => {
      if (err) reject(err)
      resolve(res.body)
    })
  })
}

export function getPosts() {
  return {
    type: 'GET_POSTS',
    payload: {
      promise: fetchPosts()
    }
  }
}

export function getAdditionalPosts() {
  return {
    type: 'GET_ADDITIONAL_POSTS',
    payload: {
      promise: fetchPosts()
    }
  }
}

export function clearPost() {
  return {
    type: 'CLEAR_POST'
  }
}

export function getPostBySeo(seoName) {
  return {
    type: 'GET_POST',
    payload: {
      promise: fetchPostBySeo(seoName)
    }
  }
}
