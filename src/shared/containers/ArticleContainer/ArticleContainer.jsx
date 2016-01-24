import React, { Component } from 'react'
import Article from '../../components/Article/Article.jsx'

export default class ArticleContainer extends Component {
  render() {
    return (
      <div className="ArticleContainer">
        <Article />
        <Article />
        <Article />
      </div>
    )
  }
}
