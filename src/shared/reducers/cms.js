export default function (state = { editing: false, post: {} }, action) {
  switch (action.type) {
    case 'EDIT_POST':
      return {
        ...state,
        editing: true,
        post: action.post
      }
    case 'SAVE_POST':
      return {
        ...state
      }
    case 'DELETE_POST':
      return {
        ...state
      }
    default:
      return { ...state }
  }
}
