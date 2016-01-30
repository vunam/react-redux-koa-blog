export default function (state = {}, action) {
  console.log('state', state)
  console.log('action', action)

  switch (action.type) {
    case 'GET_POSTS':
      return { aa: 'teee' }
    case 'TEST_POSTS_SUCCES':
      return { posts: 'teee' }
    default:
      return state
  }
}
