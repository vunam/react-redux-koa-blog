import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import SideArticles from '../../common/SideArticles/SideArticles'
import FormArticle from '../../common/FormArticle/FormArticle'
import * as postsActions from '../../../actions/posts'
import * as cmsActions from '../../../actions/cms'
import styles from './styles'

@connect(state => ({
  posts: state.posts.list,
  editedPost: state.cms.post
}), { ...postsActions, ...cmsActions })
@Radium
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
    getPosts('latest', { published: 'all' })
  }

  setNewArticle = () => {
    const { clearEditPost } = this.props
    clearEditPost()
  }

  render() {
    const { posts, editedPost, savePost } = this.props
    return (
      <div style={ styles.Cms }>
        <div style={ styles.CmsSide }>
          <div>
            <button onClick={ this.setNewArticle }>New article</button>
          </div>
          <SideArticles posts={posts} editedPost={editedPost} />
        </div>
        <div style={ styles.CmsMain }>
          <FormArticle initialValues={ editedPost.uuid ? editedPost : { published: true }} savePost={ savePost } />
        </div>
      </div>
    )
  }
}

export default Cms
