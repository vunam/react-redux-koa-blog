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
  console.log('aaa')
  return db('posts')
    .chain()
    .filter({published: true})
    .reverse()
    .take(8)
    .value()
}

export default function *getPosts() {
  const response = yield requestPosts();
  this.body = response;
}
