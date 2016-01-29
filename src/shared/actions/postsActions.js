import Request from 'superagent'

const fetchPosts = () => {
  console.log('action')
  return Request.get('http://www.google.com')
}

export function getPosts() {
  return {
    type: 'GET_POSTS',
    payload: {
      promise: fetchPosts(),
      onSuccess: () => {
        console.log('aaargh')
        return { test: 'test' }
      },
      onError: () => null
    }
  }
}
