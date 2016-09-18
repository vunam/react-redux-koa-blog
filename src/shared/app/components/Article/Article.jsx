import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { strToShortDateTime } from '../../../helpers/dates.js'

if (process.browser) require('./Article.scss')

export default class Article extends Component {
  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    seoName: PropTypes.string,
    lead: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    categories: PropTypes.array,
    tags: PropTypes.array
  }

  displayDate = () => {
    const { date } = this.props
    return strToShortDateTime(date)
  }

  displayTitle = () => {
    const { type, title, seoName } = this.props
    return (type === 'full') ? title : <Link to={`/article/${seoName}`}>{ title }</Link>
  }

  displayText = () => {
    const { type, text, lead, seoName } = this.props
    if (type === 'full') return <div dangerouslySetInnerHTML={ { __html: text } } />
    return [<div key="lead" dangerouslySetInnerHTML={ { __html: lead } } />, <Link key="link" to={ `/article/${seoName}` }>Read more &raquo;</Link>]
  }

  goToArticle = () => {
    const { seoName } = this.props
    browserHistory.push(`/article/${seoName}`)
  }

  showCategories = () => {
    const { categories } = this.props
    if (categories && categories.length) {
      return (
        <div className="Article-categories">
          Categories: { categories.map((cat, i) => <Link key={i} to={`/category/${cat}`}>{`#${cat} `}</Link>) }
        </div>
      )
    }
    return null
  }

  showTags = () => {
    const { tags } = this.props
    if (tags && tags.length) {
      return (
        <div className="Article-tags">
          Tags: { tags.map((tag, i) => <Link key={i} to={`/tag/${tag}`}>{`#${tag} `}</Link>) }
        </div>
      )
    }
    return null
  }

  render() {
    const { type, subTitle, author, date, image, seoName } = this.props

    return (
      <article id={ seoName } className={`Article Article--${type}`}>
        <section className="Article-content">
          <header>
            <div className="Article-meta">
              <span className="Article-date">
                <time dateTime={ date }>{ this.displayDate() }</time>
              </span> / <span className="Article-author">{ author }</span>
            </div>
            <h1 className="Article-title">
              { this.displayTitle() }
            </h1>
            <h2 className="Article-subTitle">{subTitle}</h2>
          </header>
          { image ? <img onClick={ this.goToArticle } className="Article-image" src={image} alt="" /> : '' }
          <div className="Article-text">
            { this.displayText() }
          </div>
          { this.showTags() }
          { this.showCategories() }
        </section>
      </article>
    )
  }
}
