import React, { Component, PropTypes } from 'react'
import SideArticles from '../../common/SideArticles/SideArticles'
import FormArticle from '../../common/FormArticle/FormArticle'
import { connect } from 'react-redux'
import * as postsActions from '../../../actions/posts'
import * as cmsActions from '../../../actions/cms'
if (typeof window !== 'undefined') require('./Cms.scss')

@connect(state => ({
  posts: state.posts.latests,
  editedPost: state.cms.post
}), { ...postsActions, ...cmsActions })
class Cms extends Component {

  static propTypes = {
    posts: PropTypes.array,
    getPosts: PropTypes.func,
    savePost: PropTypes.func,
    editedPost: PropTypes.object
  };

  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render() {
    const { posts, editedPost, savePost } = this.props
    return (
      <div className="Cms">
        <div className="Cms-side">
          <SideArticles posts={posts} editedPost={editedPost} />
        </div>
        <div className="Cms-main">
          <FormArticle initialValues={ editedPost } savePost={ savePost } />
        </div>
      </div>
    )
  }
}

export default Cms
