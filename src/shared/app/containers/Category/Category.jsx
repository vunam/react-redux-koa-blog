import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import queryString from 'query-string'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'
import * as actions from '../../../actions/posts'

if (process.browser) require('./Category.scss')

@connect(state => ({
  posts: state.posts.list
}), actions)
class Category extends Component {
  static propTypes = {
    posts: PropTypes.array,
    params: PropTypes.object,
    getPosts: PropTypes.func
  };

  static fetchData = ({ dispatch }, props, { pathname, search }) => {
    const { p } = queryString.parse(search)
    return dispatch(actions.getPosts(pathname.replace('/category/', '')), p)
  }

  componentDidMount() {
    const { params, getPosts } = this.props
    getPosts(params.cat)
  }

  componentWillReceiveProps(newProps) {
    const { getPosts, params: { cat } } = this.props
    const newCat = newProps.params.cat
    if (cat !== newCat) getPosts(newCat)
  }

  getHead() {
    return {
      title: 'React Blog - Latest posts',
      meta: [
        { name: 'description', content: 'Helmet application' },
        { property: 'og:type', content: 'article' }
      ]
    }
  }

  updateScrollPosition() {
    const hash = window.decodeURIComponent(window.location.hash)
    if (hash === '') return
    const element = document.querySelector(hash)
    if (element) element.scrollIntoView()
  }

  render() {
    const { posts } = this.props
    const head = this.getHead()
    return (
      <div className="Category">
        <Helmet { ...head } />
        <ArticleContainer posts={ posts } />
      </div>
    )
  }
}

export default Category
