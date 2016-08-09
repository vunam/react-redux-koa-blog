export default function (state = { latests: [], latest_index: 1, current: {} }, action) {
  switch (action.type) {
    case 'GET_ADDITIONAL_POSTS':
      return {
        ...state,
        latests: [...state.latests, ...action.res],
        latest_index: state.latest_index + 1
      }
    case 'GET_POSTS':
      return {
        ...state,
        latests: action.res
      }
    case 'GET_POST':
      return {
        ...state,
        current: action.res
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
