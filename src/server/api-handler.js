import low from 'lowdb'
import storage from 'lowdb/lib/file-async'
import uuid from 'node-uuid'
import queryString from 'query-string'
import config from '../config/config'

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

function requestPosts({ cat }, query) {
  const currentPage = query.p || 2
  const all = db
    .get('posts')
    .filter((item) => {
      if (
        (typeof query.published === 'undefined' && !item.published)
        || (typeof query.published !== 'undefined' && query.published !== 'all' && query.published !== item.published)
        || (cat && cat !== 'latest' && Array.isArray(item.categories) && !item.categories.includes(cat))
      ) {
        return null
      }
      return item
    })
    .chain()

  const size = all.size()
  const offset = (currentPage - 1) * config.postsPerPage

  let posts = all.reverse()

  if (query.published !== 'all') {
    posts = posts
      .slice(offset)
      .take(config.postsPerPage)
      .value()
  }

  return {
    size,
    posts
  }
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

export function *getPosts(cat) {
  const query = queryString.parse(this.req._parsedUrl.query)
  const response = yield requestPosts({ cat }, query)
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
  this.body = genericResponse('success')
}

export function *getCategory(category) {
  const cat = db('categories')
    .chain()
    .filter({ published: true, categories: category })
    .value()
  return cat
}
