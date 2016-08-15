import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import TinyMCE from 'react-tinymce'

export const fields = ['title', 'subTitle', 'author', 'date', 'published', 'lead', 'text', 'seoName', 'tags', 'categories', 'image']

@reduxForm({
  form: 'cmsArticle',
  fields
})
class FormArticle extends Component {

  static propTypes = {
    fields: PropTypes.object,
    savePost: PropTypes.func
  }

  componentWillReceiveProps(nextProps) {
    const { fields: { text } } = nextProps
    const editorLead = tinymce.EditorManager.get(this.refs.editorLead.id) // eslint-disable-line
    if (!text.touched && text.value !== editorLead.getContent({ format: 'raw' })) editorLead.setContent(nextProps.fields.text.value)
    const editorText = tinymce.EditorManager.get(this.refs.editorText.id) // eslint-disable-line
    if (!text.touched && text.value !== editorText.getContent({ format: 'raw' })) editorText.setContent(nextProps.fields.text.value)
  }

  handleEditorChange = () => {
    // this.setState({
    //   content: e.target.getContent()
    // })
  }

  saveArticle = () => {
    const { savePost } = this.props
    savePost()
  }

  render() {
    const { fields: { title, subTitle, author, date, published, lead, text, seoName, tags, categories, image } } = this.props
    return (
      <div className="FormArticle">
        <div>
          <p>
            <label>Date</label>
            <input type="text" className="FormArticle-date" placeholder="..." { ...date } />
          </p>
          <p>
            <label>Title</label>
            <input type="text" className="FormArticle-title" placeholder="..." { ...title } />
          </p>
          <p>
            <label>Seo</label>
            <input type="text" className="FormArticle-seoName" placeholder="..." { ...seoName } />
          </p>
          <p>
            <label>Sub title</label>
            <input type="text" className="FormArticle-subTitle" placeholder="..." { ...subTitle } />
          </p>
          <p>
            <label>Author</label>
            <input type="text" className="FormArticle-author" placeholder="..." { ...author } />
          </p>
          <p>
            <label>Published</label>
            <input type="text" className="FormArticle-published" placeholder="..." { ...published } />
          </p>
          <p>
            <label>Tags</label>
            <input type="text" className="FormArticle-tags" placeholder="..." { ...tags } />
          </p>
          <p>
            <label>Categories</label>
            <input type="text" className="FormArticle-categories" placeholder="..." { ...categories } />
          </p>
          <p>
            <label>Lead</label>
            <TinyMCE className="FormArticle-lead"
              ref="editorLead"
              content={ lead.value }
              onChange={this.handleEditorChange}
              config={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
              }}
            />
          </p>
          <p>
            <label>Text</label>
            <TinyMCE className="FormArticle-text"
              ref="editorText"
              content={ text.value }
              onChange={this.handleEditorChange}
              config={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
              }}
            />
          </p>
          <p>
            <label>Image</label>
            <img src={ image.value } />
            <input type="file" className="FormArticle-image" placeholder="..." />
          </p>
          <button onClick={ this.saveArticle }>Save</button>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

export default FormArticle
