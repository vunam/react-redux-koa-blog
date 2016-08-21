import { req } from '../helpers/api-fetch'

const fetchPost = (search) =>
  req(`posts/get/${search}`)
  .then((res) => res.json())

const fetchPosts = (page) =>
  req(`posts/latest${page ? `?page=${page}` : ''}`)
  .then((res) => res.json())

export const getPosts = (page = null) =>
  (dispatch) =>
    fetchPosts(page)
    .then((res) => dispatch({
      type: 'GET_POSTS',
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
