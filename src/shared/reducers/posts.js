export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_POSTS_SUCCES':
      return { latests: action.payload }
    default:
      return { ...state }
  }
}
