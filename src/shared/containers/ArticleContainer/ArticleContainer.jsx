import React, { Component, PropTypes } from 'react'
import Article from '../../components/Article/Article.jsx'
if (typeof window !== 'undefined') require('./ArticleContainer.scss')

export default class ArticleContainer extends Component {
  static propTypes = {
    posts: PropTypes.array
  };

  render() {
    const { posts } = this.props
    return (
      <section className="ArticleContainer">
        { posts.map((post, i) => <Article key={i} {...post} type="preview" />) }
      </section>
    )
  }
}
