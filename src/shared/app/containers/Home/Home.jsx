import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'
import * as actions from '../../../actions/posts'

if (process.browser) require('./Home.scss')

@connect(state => ({
  posts: state.posts.list
}), actions)
class Home extends Component {
  static propTypes = {
    posts: PropTypes.array,
    getPosts: PropTypes.func
  }

  static fetchData = ({ dispatch }) => dispatch(actions.getPosts('latest'))

  componentDidMount() {
    const { getPosts } = this.props
    getPosts('latest')
    this.updateScrollPosition()
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
      <div className="Home">
        <Helmet { ...head } />
        <ArticleContainer posts={ posts } />
      </div>
    )
  }
}

export default Home
