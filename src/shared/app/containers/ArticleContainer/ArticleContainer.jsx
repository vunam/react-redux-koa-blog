import React, { Component, PropTypes } from 'react'
import Article from '../../components/Article/Article.jsx'
import { connect } from 'react-redux'
import * as actions from '../../../actions/posts'
if (typeof window !== 'undefined') require('./ArticleContainer.scss')

@connect(null, actions)
export default class ArticleContainer extends Component {
  static propTypes = {
    posts: PropTypes.array,
    getAdditionalPosts: PropTypes.func
  };

  render() {
    const { posts, getAdditionalPosts } = this.props
    return (
      <section className="ArticleContainer">
        { posts.map((post, i) => <Article key={i} {...post} type="preview" />) }
        <button className="ArticleContainer-loadMore" onClick={ () => getAdditionalPosts() }>Load more</button>
      </section>
    )
  }
}
