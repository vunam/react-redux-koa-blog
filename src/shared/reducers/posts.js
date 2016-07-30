export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        latests: action.payload
      }
    case 'GET_POST_SUCCESS':
      return {
        ...state,
        current: action.payload
      }
    case 'CLEAR_POST':
      return {
        ...state,
        current: {}
      }
    default:
      return { ...state }
  }
}
