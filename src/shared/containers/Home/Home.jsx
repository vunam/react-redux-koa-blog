import React, { Component, PropTypes } from 'react'
import Header from '../Header/Header.jsx'
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
