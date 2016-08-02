import low from 'lowdb'
import storage from 'lowdb/file-async'

const db = low('db.json', { storage })

// Push a post into the database
// db('posts').push({ 
//   title: 'A blog title', 
//   subTitle: 'A sub title', 
//   author: 'An author',
//   date: '2016-01-20T12:00:00',
//   published: true,
//   text: 'Text'
// })

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

export function *getCategory(category) {
  const cat = db('categories')
    .chain()
    .filter({ published: true, categories: category })
    .value()

  return cat
}
