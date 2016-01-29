import React, { Component } from 'react'
import About from '../about/about.jsx'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'
import { connect } from 'react-redux'
import * as postActions from '../../actions/postsActions.js'

@connect(state => state)
class Home extends Component {

  componentDidMount() {
    postActions.getPosts()
  }

  render() {
    return (
      <div className="Main">
        <div className="Main-sidebar">
          <About />
        </div>
        <div className="Main-content">
          <ArticleContainer />
        </div>
      </div>
    )
  }
}

export default Home
