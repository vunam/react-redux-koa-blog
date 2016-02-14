import React, { Component, PropTypes } from 'react'
import About from '../about/About.jsx'
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
        <About />
        <ArticleContainer posts={ posts } />
      </div>
    )
  }
}

export default Home
