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

    console.log(this.props.params)
    getPostBySeo(params.seo)
  }

  render() {
    const { post } = this.props
    console.log(post)
    return (
      <section className="FullArticle">
      full
        <Article {...post} type="FULL" />
      </section>
    )
  }
}
