import React, { Component, PropTypes } from 'react'
import About from '../about/about.jsx'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'
import { connect } from 'react-redux'
import * as actions from '../../actions/posts'

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
      <div className="Main">
        <div className="Main-sidebar">
          <About />
        </div>
        <div className="Main-content">
          <ArticleContainer posts={ posts } />
        </div>
      </div>
    )
  }
}

export default Home
