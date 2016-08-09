import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'
import { connect } from 'react-redux'
import * as actions from '../../../actions/posts'
if (typeof window !== 'undefined') require('./Home.scss')

@connect(state => ({
  posts: state.posts.latests
}), actions)
class Home extends Component {

  static propTypes = {
    posts: PropTypes.array,
    getPosts: PropTypes.func
  }

  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
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

  static fetchData = ({ dispatch }) => dispatch(actions.getPosts())

  render() {
    const { posts } = this.props
    const head = this.getHead()
    return (
      <div className="Home">
        <Helmet { ...head } />
        <Header />
        <ArticleContainer posts={ posts } />
        <Footer />
      </div>
    )
  }
}

export default Home
