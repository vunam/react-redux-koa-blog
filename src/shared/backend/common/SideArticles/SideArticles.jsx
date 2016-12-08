import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as postsActions from '../../../actions/posts'
import * as cmsActions from '../../../actions/cms'
import { strToShortDateTime } from '../../../helpers/dates.js'

import Radium from '../../../helpers/radium'
import styles from './styles'

@connect(state => ({
  posts: state.posts.list,
  editedPost: state.cms.post
}), { ...postsActions, ...cmsActions })
@Radium
class SideArticles extends Component {

  static propTypes = {
    posts: PropTypes.array,
    editPost: PropTypes.func
  }

  clickEditPost = (post) => {
    const { editPost } = this.props
    editPost(post)
  }

  render() {
    const { posts } = this.props
    return (
      <div className="SideArticles" style={ styles.SideArticles }>
        <ul style={ styles.SideArticlesList }>
          { posts.map((post, i) => (
            <li key={i} style={ styles.SideArticlesItem }>
              <span style={ styles.SideArticlesTitle }>{ post.title }</span>
              <span style={ styles.SideArticlesDate }>{ strToShortDateTime(post.date) }</span>
              <button style={ styles.SideArticlesButton } onClick={() => this.clickEditPost(post)}>edit</button>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

export default SideArticles
