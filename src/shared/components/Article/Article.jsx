import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
if (typeof window !== 'undefined') require('./Article.scss')

export default class Article extends Component {
  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    seoName: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string
  };

  render() {
    const { type, title, subTitle, author, date, seoName, text, image } = this.props
    return (
      <article className="Article">
        <section className="Article-content">
          <header>
            <div className="Article-meta">
              <span className="Article-date">
                <time dateTime={ date }>{ date }</time>
              </span> / <span className="Article-author">{ author }</span>
            </div>
            <h1 className="Article-title" role="title">
              {(type === 'FULL') ? title : <Link to={ '/article/' + seoName }>{ title }</Link>}
            </h1>
            <h2 className="Article-subTitle">{ subTitle }</h2>
          </header>
          <img className="Article-image" src={ image } />
          <div className="Article-text">
            { text }
          </div>
        </section>
      </article>
    )
  }
}
