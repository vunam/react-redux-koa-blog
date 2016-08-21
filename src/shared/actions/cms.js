import { getPosts } from './posts'
import { req } from '../helpers/api-fetch'

export const putCmsPost = () => {
  return {
    type: 'PUT_POST',
    payload: {
      promise: null
    }
  }
}

export const clearEditPost = () => {
  return {
    type: 'CLEAR_EDIT_POST'
  }
}

export const editPost = (post) => {
  return {
    type: 'EDIT_POST',
    post
  }
}

export const savePost = (post) =>
  (dispatch) =>
    req('posts/put', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then((res) => {
      dispatch({
        type: 'PUT_POST_SUCCESS',
        res
      })
      dispatch(getPosts())
    })
