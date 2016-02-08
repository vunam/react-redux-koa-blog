import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Article extends Component {
  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    seoName: PropTypes.string,
    text: PropTypes.string
  };

  render() {
    const { type, title, subTitle, author, date, seoName, text } = this.props
    return (
      <article className="Article">
        <header>
          <h1 className="Article-title">
            {(type === 'FULL') ? title : <Link to={ '/article/' + seoName }>{ title }</Link>}
          </h1>
          <h2 className="Article-subTitle">{ subTitle }</h2>
          <span className="Article-date">
            <time dateTime={ date }>{ date }</time>
          </span>
          <span className="Article-author">{ author }</span>
        </header>
        <div className="Article-text">
          { text }
        </div>
      </article>
    )
  }
}
