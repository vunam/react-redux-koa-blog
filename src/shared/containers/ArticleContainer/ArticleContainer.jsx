import React, { Component, PropTypes } from 'react'
import Article from '../../components/Article/Article.jsx'

export default class ArticleContainer extends Component {
  static propTypes = {
    posts: PropTypes.array
  };

  render() {
    const { posts } = this.props
    return (
      <section className="ArticleContainer">
        { posts.map((post, i) => <Article key={i} {...post} type="PREVIEW" />) }
      </section>
    )
  }
}
