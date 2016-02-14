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

function request_posts() {
  return db('posts')
    .chain()
    .filter({published: true})
    .reverse()
    .take(8)
    .value()
}

function request_post_by_seo(name) {
  const post = db('posts')
    .chain()
    .filter({published: true, seoName: name})
    .value()

  if (!post.length) return { error: "No post found" }

  return post[0]
}

export function *get_latest_posts() {
  const response = yield request_posts()
  this.body = response
}

export function *get_post(data) {
  //add request by id later
  const response = yield request_post_by_seo(data)
  this.body = response
}
