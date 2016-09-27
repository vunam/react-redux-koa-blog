import { req } from '../helpers/api-fetch'

const fetchPost = (search) =>
  req(`posts/get/${search}`)
  .then((res) => res.json())

const fetchPosts = (cat, page, all) =>
  req(`posts/${cat}?${page ? `p=${page}` : ''}${all ? '&all=1' : ''}`)
  .then((res) => res.json())

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  category
})

export const getPosts = (category, page = 1, all = false) =>
  (dispatch) => {
    dispatch(setCategory(category))
    return fetchPosts(category, page, all)
    .then((res) => dispatch({
      type: 'GET_POSTS',
      category,
      res
    }))
    .catch((err) => { throw new Error(err) })
  }

export const getAdditionalPosts = () =>
  (dispatch, getState) => {
    const { posts: { category, index } } = getState()
    fetchPosts(category, index + 1)
    .then((res) => dispatch({
      type: 'GET_ADDITIONAL_POSTS',
      res
    }))
    .catch((err) => { throw new Error(err) })
  }

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
