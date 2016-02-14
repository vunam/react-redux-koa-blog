import React, { Component, PropTypes } from 'react'
import Article from '../../components/Article/Article.jsx'
import { connect } from 'react-redux'
import * as actions from '../../actions/posts'

@connect(state => ({
  post: state.posts.current
}), actions)
export default class FullArticle extends Component {
  static propTypes = {
    post: PropTypes.object,
    params: PropTypes.object,
    getPostBySeo: PropTypes.func
  };

  componentDidMount() {
    const { getPostBySeo, params } = this.props
    getPostBySeo(params.seo)
  }

  render() {
    const { post } = this.props
    return (
      <section className="FullArticle">
      full
        <Article {...post} type="FULL" />
      </section>
    )
  }
}
