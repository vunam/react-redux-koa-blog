export default function (state = { latests: [], latest_index: 1, current: {} }, action) {
  switch (action.type) {
    case 'GET_ADDITIONAL_POSTS_SUCCESS':
      return {
        ...state,
        latests: [...state.latests, ...action.payload],
        latest_index: state.latest_index + 1
      }
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
