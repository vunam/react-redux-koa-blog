import React, { Component, PropTypes } from 'react'

export default class Article extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string
  };

  render() {
    const { title, subTitle, author, date, text } = this.props
    console.log(this.props)
    return (
      <article className="Article">
        <header>
          <h1 className="Article-title">{ title }</h1>
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
