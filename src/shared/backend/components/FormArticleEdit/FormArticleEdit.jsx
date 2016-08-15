import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import TinyMCE from 'react-tinymce'

export const fields = ['title', 'subTitle', 'author', 'date', 'published', 'lead', 'text', 'seoName', 'tags', 'categories', 'image']

@reduxForm({
  form: 'cmsArticle',
  fields
})
class FormArticleEdit extends Component {

  static propTypes = {
    fields: PropTypes.object
  }

  componentWillReceiveProps(nextProps) {
    const { fields: { text, lead } } = nextProps
    const editorLead = tinymce.EditorManager.get(this.refs.editorLead.id) // eslint-disable-line
    const editorText = tinymce.EditorManager.get(this.refs.editorText.id) // eslint-disable-line
    if (!lead.touched && lead.value !== editorLead.getContent({ format: 'raw' })) editorLead.setContent(nextProps.fields.lead.value)
    if (!text.touched && text.value !== editorText.getContent({ format: 'raw' })) editorText.setContent(nextProps.fields.text.value)
  }

  handleEditorChange(e) {
    this.setState({
      content: e.target.getContent()
    })
  }

  render() {
    const { fields: { title, subTitle, author, date, published, lead, text, seoName, tags, categories, image } } = this.props
    return (
      <div className="FormArticleEdit">
        <div>
          <p>
            <label>Title</label>
            <input type="file" className="FormArticleEdit-image" placeholder="..." { ...image } />
          </p>
          <p>
            <label>Title</label>
            <input type="text" className="FormArticleEdit-title" placeholder="..." { ...title } />
          </p>
          <p>
            <label>Seo</label>
            <input type="text" className="FormArticleEdit-seoName" placeholder="..." { ...seoName } />
          </p>
          <p>
            <label>Sub title</label>
            <input type="text" className="FormArticleEdit-subTitle" placeholder="..." { ...subTitle } />
          </p>
          <p>
            <label>Author</label>
            <input type="text" className="FormArticleEdit-author" placeholder="..." { ...author } />
          </p>
          <p>
            <label>Published</label>
            <input type="text" className="FormArticleEdit-published" placeholder="..." { ...published } />
          </p>
          <p>
            <label>Tags</label>
            <input type="text" className="FormArticleEdit-tags" placeholder="..." { ...tags } />
          </p>
          <p>
            <label>Categories</label>
            <input type="text" className="FormArticleEdit-categories" placeholder="..." { ...categories } />
          </p>
          <p>
            <label>Date</label>
            <input type="text" className="FormArticleEdit-date" placeholder="..." { ...date } />
          </p>
          <p>
            <TinyMCE className="FormArticleEdit-lead"
              ref="editorLead"
              content={ lead.value }
              onChange={() => this.handleEditorChange}
              config={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
              }}
            />
          </p>
          <p>
            <TinyMCE className="FormArticleEdit-content"
              ref="editorText"
              content={ text.value }
              onChange={() => this.handleEditorChange}
              config={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
              }}
            />
          </p>
        </div>
      </div>
    )
  }
}

export default FormArticleEdit
