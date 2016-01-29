export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return { aa: 'teee' }
    default:
      return state
  }
}
