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
        <table style={ styles.SideArticlesTable }>
          <tbody>
            { posts.map((post, i) => (
              <tr key={i}>
                <td style={ styles.SideArticlesTableTd }>{ post.title }<span className="SideArticles-date">{ strToShortDateTime(post.date) }</span></td>
                <td style={ styles.SideArticlesTableTd }>
                  <button onClick={() => this.clickEditPost(post)}>edit</button>
                </td>
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SideArticles
