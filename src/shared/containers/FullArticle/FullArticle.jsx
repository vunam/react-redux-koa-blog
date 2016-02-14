import React, { Component, PropTypes } from 'react'
import About from '../about/About.jsx'
import Article from '../../components/Article/Article.jsx'
import { connect } from 'react-redux'
import * as actions from '../../actions/posts'
if (typeof window !== 'undefined') require('./FullArticle.scss')

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

  onBackEvent(e) {
    console.log(this.props)
    const { history } = this.props
    e.preventDefault()
    history.pushState(null, '/');
  }
  render() {
    const { post } = this.props
    return (
      <div className="FullArticle">
        <About />
        <Article {...post} type="FULL" />
        <div className="FullArticle-foot">
          <a onClick={ this.onBackEvent.bind(this) }>&laquo; Back to home</a>
        </div>
      </div>
    )
  }
}