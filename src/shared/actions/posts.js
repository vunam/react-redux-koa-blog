import { req } from '../helpers/api-fetch'

const fetchPost = (search) =>
  req(`posts/get/${search}`)
  .then((res) => res.json())

const fetchPosts = (page, cat) =>
  req(`posts/${cat}${page ? `?page=${page}` : ''}`)
  .then((res) => res.json())

export const getPosts = (page = null, category = 'latests') =>
  (dispatch) =>
    fetchPosts(page, category)
    .then((res) => dispatch({
      type: 'GET_POSTS',
      category,
      res
    }))
    .catch((err) => { throw new Error(err) })

export const getAdditionalPosts = (page = null) =>
  (dispatch) =>
    fetchPosts(page)
    .then((res) => dispatch({
      type: 'GET_ADDITIONAL_POSTS',
      res
    }))
    .catch((err) => { throw new Error(err) })

export const getPostBySeo = (search) =>
  (dispatch) =>
    fetchPost(search)
    .then((res) => dispatch({
      type: 'GET_POST',
      res
    }))

export const clearPost = () => ({
  type: 'CLEAR_POST'
})
