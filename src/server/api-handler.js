import low from 'lowdb'
import storage from 'lowdb/file-async'

const db = low('db.json', { storage })

function genericResponse(status, data = {}, message = null) {
  return {
    status,
    data,
    message
  }
}

function savePost(post) {
  return db('posts').push(post)
}

function requestPosts() {
  return db('posts')
    .chain()
    .filter({ published: true })
    .reverse()
    .take(8)
    .value()
}

function requestPostBySeo(name) {
  const post = db('posts')
    .chain()
    .filter({ published: true, seoName: name })
    .value()

  if (!post.length) return { error: 'No post found' }

  return post[0]
}

export function *getLatestPosts() {
  const response = yield requestPosts()
  this.body = response
}

export function *getPost(data) {
  // add request by id later
  const response = yield requestPostBySeo(data)
  this.body = response
}

export function *putPost() {
  yield this.request.body
  const post = this.request.body
  savePost(this.request.body)
  this.body = genericResponse('success')
}

export function *getCategory(category) {
  const cat = db('categories')
    .chain()
    .filter({ published: true, categories: category })
    .value()

  return cat
}
