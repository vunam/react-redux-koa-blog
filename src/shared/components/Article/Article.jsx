import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { strToShortDateTime } from '../../helpers/dates.js'
if (typeof window !== 'undefined') require('./Article.scss')

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
    image: PropTypes.string
  };

  displayDate() {
    const { date } = this.props
    return strToShortDateTime(date)
  }

  displayTitle() {
    const { type, title, seoName } = this.props
    return (type === 'full') ? title : <Link to={ '/article/' + seoName }>{ title }</Link>
  }

  displayText() {
    const { type, text, lead, seoName } = this.props
    if (type === 'full') return <div dangerouslySetInnerHTML={{ __html: text } }/>
    return <p>{ lead } <Link to={ '/article/' + seoName }>Read more &raquo;</Link></p>
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
            <h1 className="Article-title" role="title">
              { this.displayTitle() }
            </h1>
            <h2 className="Article-subTitle">{ subTitle }</h2>
          </header>
          { image ? <img className="Article-image" src={ image } /> : '' }
          <div className="Article-text">
            { this.displayText() }
          </div>
        </section>
      </article>
    )
  }
}
