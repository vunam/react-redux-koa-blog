import React, { Component } from 'react'
import About from '../about/about.jsx'
import ArticleContainer from '../ArticleContainer/ArticleContainer.jsx'

export default class Main extends Component {
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
