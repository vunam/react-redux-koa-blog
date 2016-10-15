import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Article from '../../components/Article/Article.jsx'
import * as actions from '../../../actions/posts'

import Radium from '../../../helpers/radium'
import styles from './styles'

@connect(state => ({
  post: state.posts.current
}), actions)
@Radium
export default class FullArticle extends Component {
  static propTypes = {
    post: PropTypes.object,
    params: PropTypes.object,
    getPostBySeo: PropTypes.func,
    history: PropTypes.object,
    clearPost: PropTypes.func
  }

  static fetchData = ({ dispatch }, props, location) => dispatch(actions.getPostBySeo(location.pathname.replace('/article/', '')))

  componentWillMount() {
    const { getPostBySeo, params } = this.props
    getPostBySeo(params.seo)
  }

  componentWillUnmount() {
    this.props.clearPost()
  }

  getHead() {
    const { post: { title } } = this.props
    return { title }
  }

  render() {
    const { post } = this.props
    if (!post) return null
    const head = this.getHead()
    return (
      <div style={ styles.FullArticle }>
        <Helmet { ...head } />
        <Article type="full" {...post} />
        <div style={ styles.FullArticleFoot }>
          <Link
            style={ styles.FullArticleBackLink }
            to={{
              pathname: '/',
              hash: (post ? `#${post.seoName}` : '')
            }}
          >
            &laquo; Back to home
          </Link>
        </div>
      </div>
    )
  }
}
