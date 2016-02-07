import Request from 'superagent'
const host = (process.browser) ? '' : ':3000'

const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    Request.get(host + '/api/get_latest_posts').end((err, res) => {
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
