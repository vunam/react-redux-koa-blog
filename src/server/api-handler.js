import low from 'lowdb'
import storage from 'lowdb/lib/file-async'
import uuid from 'node-uuid'

const db = low('db.json', { storage })

function genericResponse(status, data = {}, message = null) {
  return {
    status,
    data,
    message
  }
}

function savePost(post) {
  if (post.uuid) {
    return db.get('posts')
      .chain()
      .find({ uuid: post.uuid })
      .assign(post)
      .value()
  }
  return db
    .get('posts')
    .push({
      uuid: uuid.v1(),
      date: new Date().toISOString(),
      ...post
    })
    .value()
}

function requestPosts() {
  return db
    .get('posts')
    .chain()
    .filter({ published: true })
    .reverse()
    .take(8)
    .value()
}

function requestPostBySeo(name) {
  const post = db
    .get('posts')
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
  console.log(savePost(this.request.body))
  this.body = genericResponse('success')
}

export function *getCategory(category) {
  const cat = db('categories')
    .chain()
    .filter({ published: true, categories: category })
    .value()
  return cat
}
