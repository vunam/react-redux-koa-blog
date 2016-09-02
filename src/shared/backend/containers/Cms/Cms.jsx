import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SideArticles from '../../common/SideArticles/SideArticles'
import FormArticle from '../../common/FormArticle/FormArticle'
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
    editedPost: PropTypes.object,
    clearEditPost: PropTypes.func
  };

  componentWillMount() {
    const { getPosts } = this.props
    getPosts()
  }

  setNewArticle = () => {
    const { clearEditPost } = this.props
    clearEditPost()
  }

  render() {
    const { posts, editedPost, savePost } = this.props
    return (
      <div className="Cms">
        <div className="Cms-side">
          <div className="">
            <button onClick={ this.setNewArticle }>New article</button>
          </div>
          <SideArticles posts={posts} editedPost={editedPost} />
        </div>
        <div className="Cms-main">
          <FormArticle initialValues={ editedPost.uuid ? editedPost : { published: true }} savePost={ savePost } />
        </div>
      </div>
    )
  }
}

export default Cms
