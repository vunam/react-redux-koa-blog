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

export function *get_latest_posts() {
  const response = yield request_posts();
  this.body = response;
}
