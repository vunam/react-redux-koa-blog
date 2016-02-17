import React, { Component, PropTypes } from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'
import { connect } from 'react-redux'
import * as actions from '../../actions/posts'
if (typeof window !== 'undefined') require('./Home.scss')

@connect(state => ({
  posts: state.posts.latests
}))
class Home extends Component {

  static propTypes = {
    posts: PropTypes.array
  };

  componentDidMount() {
    actions.getPosts()
    this.updateScrollPosition()
  }

  updateScrollPosition() {
    const hash = window.decodeURIComponent(window.location.hash)
    const element = document.querySelector(hash)
    if (element) element.scrollIntoView()
  }

  render() {
    const { posts } = this.props
    return (
      <div className="Home">
        <Header />
        <ArticleContainer posts={ posts } />
        <Footer />
      </div>
    )
  }
}

export default Home
