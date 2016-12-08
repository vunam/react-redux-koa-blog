import React, { Component, PropTypes } from 'react'
import { reduxForm, reset, change } from 'redux-form'
import { connect } from 'react-redux'
import TinyMCE from 'react-tinymce'
import UrlSafeString from 'url-safe-string'
import Radium from '../../../helpers/radium'
import { domOnlyProps } from '../../../helpers/forms'
import styles from './styles'

const tagGenerator = new UrlSafeString()

export const formName = 'cmsArticle'
export const formFields = ['uuid', 'title', 'subTitle', 'author', 'date', 'published', 'lead', 'text', 'seoName', 'tags', 'categories', 'image']

@reduxForm({
  form: formName,
  fields: formFields
})
@connect(null, { reset, change })
@Radium
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
    const { fields: { text, lead } } = nextProps
    const editorLead = tinymce.EditorManager.get(this.editorLead.id) // eslint-disable-line
    if (!lead.touched && lead.value !== editorLead.getContent({ format: 'raw' })) editorLead.setContent(nextProps.fields.lead.value)
    const editorText = tinymce.EditorManager.get(this.editorText.id) // eslint-disable-line
    if (!text.touched && text.value !== editorText.getContent({ format: 'raw' })) editorText.setContent(nextProps.fields.text.value)

    if (text.value !== nextProps.fields.text.value) editorText.setContent(nextProps.fields.text.value)
    if (lead.value !== nextProps.fields.lead.value) editorText.setContent(nextProps.fields.lead.value)
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
      <div style={ styles.FormArticle }>
        <div>
          <input type="text" className="FormArticle-uuid" {...domOnlyProps(uuid)} />
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Date</label>
            <input style={ styles.FormArticleInput } type="text" className="FormArticle-date" placeholder="..." {...domOnlyProps(date)} />
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Title</label>
            <input style={ styles.FormArticleInput } type="text" className="FormArticle-title" placeholder="..." {...domOnlyProps(title)} />
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Seo</label>
            <input style={ styles.FormArticleInput } type="text" className="FormArticle-seoName" placeholder="..." {...domOnlyProps(seoName)} value={tagGenerator.generate(title.value)} />
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Sub title</label>
            <input style={ styles.FormArticleInput } type="text" className="FormArticle-subTitle" placeholder="..." {...domOnlyProps(subTitle)} />
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Author</label>
            <input style={ styles.FormArticleInput } type="text" className="FormArticle-author" placeholder="..." {...domOnlyProps(author)} />
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Published</label>
            <input style={ styles.FormArticleInput } type="checkbox" className="FormArticle-published" placeholder="..." {...domOnlyProps(published)} />
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Tags</label>
            <input style={ styles.FormArticleInput } type="text" className="FormArticle-tags" placeholder="..." {...domOnlyProps(tags)} />
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Categories</label>
            <input style={ styles.FormArticleInput } type="text" className="FormArticle-categories" placeholder="..." {...domOnlyProps(categories)} />
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Lead</label>
            <div style={ styles.FormArticleInput }>
              <TinyMCE
                style={ styles.FormArticleInput }
                className="FormArticle-lead"
                ref={(c) => { this.editorLead = c }}
                content={lead.value}
                onChange={() => this.handleEditorChange('lead')}
                config={{
                  plugins: 'link image code',
                  toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                }}
              />
            </div>
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Text</label>
            <div style={ styles.FormArticleInput }>
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
            </div>
          </div>
          <div style={ styles.FormArticleRow }>
            <label style={ styles.FormArticleLabel }>Image</label>
            <img src={image.value } alt="Current" style={ styles.FormArticleImage } />
            <input style={ styles.FormArticleInput } type="file" className="FormArticle-image" placeholder="..." />
          </div>
          <button onClick={this.saveArticle }>Save</button>
          <button onClick={this.resetArticle }>Reset</button>
        </div>
      </div>
    )
  }
}

export default FormArticle
