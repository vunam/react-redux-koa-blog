import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as postsActions from '../../../actions/posts'
import * as cmsActions from '../../../actions/cms'
import { strToShortDateTime } from '../../../helpers/dates.js'

if (typeof window !== 'undefined') require('./SideArticles.scss')

@connect(state => ({
  posts: state.posts.latests,
  editedPost: state.cms.post
}), { ...postsActions, ...cmsActions })
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
      <div className="SideArticles">
        <table className="SideArticles-table table-full">
          <tbody>
          { posts.map((post, i) => (
            <tr key={i}>
              <td>{ post.title }<span className="SideArticles-date">{ strToShortDateTime(post.date) }</span></td>
              <td>
                <button onClick={() => this.clickEditPost(post)}>edit</button>
              </td>
            </tr>)) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default SideArticles
