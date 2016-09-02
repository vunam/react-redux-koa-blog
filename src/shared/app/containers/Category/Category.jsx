import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'
import * as actions from '../../../actions/posts'

if (process.browser) require('./Category.scss')

@connect(state => ({
  posts: state.posts.latests
}))
class Category extends Component {
  static propTypes = {
    posts: PropTypes.array
  };

  componentDidMount() {
    actions.getPosts()
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
      <div className="Category">
        <Helmet { ...head } />
        <Header />
        <ArticleContainer posts={ posts } />
        <Footer />
      </div>
    )
  }
}

export default Category
