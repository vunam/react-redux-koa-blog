import Request from 'superagent'
import { fetchPost } from 'superagent'
const host = (process.browser) ? '' : ':3000'

export function putCmsPost() {
  return {
    type: 'PUT_POST',
    payload: {
      promise: null
    }
  }
}

export function editPost(id) {
  return {
    type: 'EDIT_POST',
    payload: {
      promise: fetchPost(id)
    }
  }
}