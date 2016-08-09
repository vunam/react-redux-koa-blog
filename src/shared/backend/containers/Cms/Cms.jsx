import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TinyMCE from 'react-tinymce'
if (typeof window !== 'undefined') require('./Cms.scss')

@connect(state => ({
  posts: state.posts.latests
}))
class Cms extends Component {

  static propTypes = {
    posts: PropTypes.array
  };

  render() {
    const { posts } = this.props
    return (
      <div className="Cms">
        <div>
          <ul>
            { posts.map((post, i) => (<li key={i}>{post.title}<button>edit</button></li>)) }
          </ul>
        </div>
        <div>
          <input type="text" className="title" />
          <input type="text" className="author" />
          <input type="text" className="publish" />
          <input type="text" className="tags" />
          <input type="text" className="categories" />
          <TinyMCE className="content"
            content="<p>Initial content</p>"
            config={{
              plugins: 'link image code',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
            }}
          />
        </div>
      </div>
    )
  }
}

export default Cms
