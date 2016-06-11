import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Article from '../../components/Article/Article.jsx'
import { connect } from 'react-redux'
import { Link } from 'react-router'
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
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    const { getPostBySeo, params } = this.props
    getPostBySeo(params.seo)
  }

  // getHead(title) {
  //   return {
  //     title,
  //     titleTemplate: 'React Blog %s',
  //     meta: [
  //       { name: 'description', content: 'Helmet application' },
  //       { property: 'og:type', content: 'article' }
  //     ]
  //   }
  // }

  render() {
    const { post } = this.props
    // const head = this.getHead(post.title)
    // if (!post) return ''
    return (
      <div className="FullArticle">
        { /* <Helmet { ...head } /> */ }
        <Header />
        <Article type="full" {...post} />
        <div className="FullArticle-foot">
          <Link className="FullArticle-backLink" to={{
            pathname: '/',
            hash: (post ? '#' + post.seoName : '') }}
          >
            &laquo; Back to home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}
