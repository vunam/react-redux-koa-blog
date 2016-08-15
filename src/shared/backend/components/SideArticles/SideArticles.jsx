import React, { Component, PropTypes } from 'react'
import { strToShortDateTime } from '../../../helpers/dates.js'
if (typeof window !== 'undefined') require('./SideArticles.scss')

class SideArticles extends Component {
  static propTypes = {
    posts: PropTypes.array,
    getPosts: PropTypes.func,
    editPost: PropTypes.func
  }

  clickEditPost = (post) => {
    const { editPost } = this.props
    editPost(post)
  }

  clickDeletePost = (post) => {
    console.log(post)
  }

  render() {
    const { posts } = this.props
    return (
      <div className="SideArticles">
        <table className="table table-full">
        { posts.map((post, i) => (
            <tr key={i}>
            <td>{ strToShortDateTime(post.date) }</td>
            <td>{ post.title }</td>
            <td>{ post.author }</td>
            <td><button onClick={() => this.clickEditPost(post)}>edit</button></td>
            <td><button onClick={() => this.clickDeletePost(post)}>delete</button></td>
            </tr>)) }
        </table>
      </div>
    )
  }
}

export default SideArticles
