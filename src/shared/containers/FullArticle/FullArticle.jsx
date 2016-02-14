import React, { Component, PropTypes } from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
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
    getPostBySeo: PropTypes.func,
    history: PropTypes.object
  };

  componentDidMount() {
    const { getPostBySeo, params } = this.props
    getPostBySeo(params.seo)
  }

  onBackEvent(e) {
    const { history } = this.props
    e.preventDefault()
    history.push('/')
  }

  render() {
    const { post } = this.props
    return (
      <div className="FullArticle">
        <Header />
        <Article {...post} type="FULL" />
        <div className="FullArticle-foot">
          <a onClick={ this.onBackEvent.bind(this) }>&laquo; Back to home</a>
        </div>
        <Footer />
      </div>
    )
  }
}
