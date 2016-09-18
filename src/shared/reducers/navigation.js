export default function (state = { opened: false }, action) {
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        opened: true
      }
    case 'CLOSE_MENU':
      return {
        ...state,
        opened: false
      }
    default:
      return state
  }
}
