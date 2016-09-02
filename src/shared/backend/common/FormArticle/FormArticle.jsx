import React, { Component, PropTypes } from 'react'
import { reduxForm, reset, change } from 'redux-form'
import { connect } from 'react-redux'
import TinyMCE from 'react-tinymce'
import UrlSafeString from 'url-safe-string'
import { domOnlyProps } from '../../../helpers/forms'

const tagGenerator = new UrlSafeString()

export const formName = 'cmsArticle'
export const formFields = ['uuid', 'title', 'subTitle', 'author', 'date', 'published', 'lead', 'text', 'seoName', 'tags', 'categories', 'image']

@reduxForm({
  form: formName,
  fields: formFields
})
@connect(null, { reset, change })
class FormArticle extends Component {

  static propTypes = {
    fields: PropTypes.object,
    values: PropTypes.object,
    savePost: PropTypes.func,
    reset: PropTypes.func,
    change: PropTypes.func,
    editedArticle: PropTypes.func
  }

  componentWillReceiveProps(nextProps) {
    const { fields: { text, lead, title } } = nextProps
    const editorLead = tinymce.EditorManager.get(this.editorLead.id) // eslint-disable-line
    if (!lead.touched && lead.value !== editorLead.getContent({ format: 'raw' })) editorLead.setContent(nextProps.fields.lead.value)
    const editorText = tinymce.EditorManager.get(this.editorText.id) // eslint-disable-line
    if (!text.touched && text.value !== editorText.getContent({ format: 'raw' })) editorText.setContent(nextProps.fields.text.value)

    if (text.value !== nextProps.fields.text.value) {
      editorText.setContent(nextProps.fields.text.value)
    }
  }

  getFormValues = (form) => {
    if (!form) return {}
    return Object
      .keys(form)
      .filter((key) => !key.startsWith('_'))
      .reduce((prev, key) => ({ ...prev, [key]: form[key].value }), {})
  }

  saveArticle = () => {
    const { savePost, values } = this.props
    savePost(values)
  }

  resetArticle = () => {
    this.props.reset(formName)
  }

  handleEditorChange = (field) => {
    const editorId = (field === 'lead') ? this.editorLead.id : this.editorText.id
    const editor = tinymce.EditorManager.get(editorId) // eslint-disable-line

    this.props.change(formName, field, editor.getContent({ format: 'raw' }))
  }

  render() {
    const { fields: { uuid, title, subTitle, author, date, published, lead, text, seoName, tags, categories, image } } = this.props
    return (
      <div className="FormArticle">
        <div>
          <input type="text" className="FormArticle-uuid" {...domOnlyProps(uuid)} />
          <p>
            <label>Date</label>
            <input type="text" className="FormArticle-date" placeholder="..." {...domOnlyProps(date)} />
          </p>
          <p>
            <label>Title</label>
            <input type="text" className="FormArticle-title" placeholder="..." {...domOnlyProps(title)} />
          </p>
          <p>
            <label>Seo</label>
            <input type="text" className="FormArticle-seoName" placeholder="..." {...domOnlyProps(seoName)} value={tagGenerator.generate(title.value)} />
          </p>
          <p>
            <label>Sub title</label>
            <input type="text" className="FormArticle-subTitle" placeholder="..." {...domOnlyProps(subTitle)} />
          </p>
          <p>
            <label>Author</label>
            <input type="text" className="FormArticle-author" placeholder="..." {...domOnlyProps(author)} />
          </p>
          <p>
            <label>Published</label>
            <input type="checkbox" className="FormArticle-published" placeholder="..." {...domOnlyProps(published)} />
          </p>
          <p>
            <label>Tags</label>
            <input type="text" className="FormArticle-tags" placeholder="..." {...domOnlyProps(tags)} />
          </p>
          <p>
            <label>Categories</label>
            <input type="text" className="FormArticle-categories" placeholder="..." {...domOnlyProps(categories)} />
          </p>
          <p>
            <label>Lead</label>
            <TinyMCE
              className="FormArticle-lead"
              ref={(c) => { this.editorLead = c }}
              content={lead.value}
              onChange={() => this.handleEditorChange('lead')}
              config={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
              }}
            />
          </p>
          <p>
            <label>Text</label>
            <TinyMCE
              className="FormArticle-text"
              ref={(c) => { this.editorText = c }}
              content={text.value }
              onChange={() => this.handleEditorChange('text')}
              config={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
              }}
            />
          </p>
          <p>
            <label>Image</label>
            <img src={image.value } alt="Current" />
            <input type="file" className="FormArticle-image" placeholder="..." />
          </p>
          <button onClick={this.saveArticle }>Save</button>
          <button onClick={this.resetArticle }>Reset</button>
        </div>
      </div>
    )
  }
}

export default FormArticle
