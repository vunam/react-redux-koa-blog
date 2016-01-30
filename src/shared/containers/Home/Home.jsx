import React, { Component } from 'react'
import About from '../about/about.jsx'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'
import { connect } from 'react-redux'
import * as postActions from '../../actions/postActions.js'

@connect(state => ({
  posts: state
}))
class Home extends Component {

  componentDidMount() {
    postActions.getPosts()
  }

  render() {
    console.log(this.props.posts)
    return (
      <div className="Main">
        <div className="Main-sidebar">
        aa
          {JSON.stringify( this.props.posts) }
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
