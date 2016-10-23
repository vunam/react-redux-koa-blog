import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from '../../components/Article/Article.jsx'
import * as actions from '../../../actions/posts'

import Radium, { getTheme } from '../../../helpers/radium'

const styles = getTheme(require('./styles'))

@connect((state) => ({ total: state.posts.total }), actions)
@Radium
export default class ArticleContainer extends Component {
  static propTypes = {
    posts: PropTypes.array,
    getAdditionalPosts: PropTypes.func,
    total: PropTypes.number
  };

  render() {
    const { posts, getAdditionalPosts, total } = this.props
    return (
      <section style={ styles.ArticleContainer }>
        {/* !posts.length && <p>There are no posts on this page</p> */}
        { posts.map((post, i) => <Article key={i} {...post} type="preview" />) }
        { posts.length < total && <button style={ styles.ArticleContainerLoadMore } onClick={ () => getAdditionalPosts() }>Load more</button> }
      </section>
    )
  }
}
