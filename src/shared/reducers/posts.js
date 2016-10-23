export default function (state = { list: [], category: 'latest', index: 1, total: -1, current: {} }, action) {
  switch (action.type) {
    case 'GET_ADDITIONAL_POSTS':
      return {
        ...state,
        list: [...state.list, ...action.res.posts],
        index: state.index + 1
      }
    case 'GET_POSTS':
      return {
        ...state,
        list: action.res.posts,
        total: action.res.total,
        index: 1
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
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category
      }
    default:
      return { ...state }
  }
}
