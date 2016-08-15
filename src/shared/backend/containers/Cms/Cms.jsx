import React, { Component, PropTypes } from 'react'
import SideArticles from '../../components/SideArticles/SideArticles'
import FormArticleEdit from '../../components/FormArticleEdit/FormArticleEdit'
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
    editPost: PropTypes.func,
    editedPost: PropTypes.object
  }

  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }

  render() {
    const { posts, editPost, editedPost } = this.props
    return (
      <div className="Cms">
        <div className="Cms-side">
          <SideArticles posts={posts} editPost={editPost} />
        </div>
        <div className="Cms-content">
          <FormArticleEdit initialValues={ editedPost } />
        </div>
      </div>
    )
  }
}

export default Cms
