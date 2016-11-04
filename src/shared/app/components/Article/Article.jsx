import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { strToShortDateTime } from '../../../helpers/dates.js'

import Radium, { getTheme } from '../../../helpers/radium'

const styles = getTheme(require('./styles'))

@Radium
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
    return (type === 'full') ? <span style={ styles.ArticleTitle }>title</span> : <Link to={`/article/${seoName}`} style={ styles.ArticleTitle }>{ title }</Link>
  }

  displayText = () => {
    const { type, text, lead, seoName } = this.props
    if (type === 'full') return <div dangerouslySetInnerHTML={ { __html: text } } />
    return [<div key="lead" dangerouslySetInnerHTML={ { __html: lead } } />, <Link key="link" to={ `/article/${seoName}` } style={ styles.ArticleReadMore }>Read more &raquo;</Link>]
  }

  goToArticle = () => {
    const { seoName } = this.props
    browserHistory.push(`/article/${seoName}`)
  }

  showCategories = () => {
    const { categories } = this.props
    if (categories && categories.length) {
      return (
        <div style={ styles.ArticleCategories }>
          Categories: { categories.map((cat, i) => <Link key={i} to={`/category/${cat}`} style={ styles.ArticleLinks }>{`#${cat} `}</Link>) }
        </div>
      )
    }
    return null
  }

  showTags = () => {
    const { tags } = this.props
    if (tags && tags.length) {
      return (
        <div style={ styles.ArticleTags }>
          Tags: { tags.map((tag, i) => <Link key={i} to={`/tag/${tag}`} style={ styles.ArticleLinks }>{`#${tag} `}</Link>) }
        </div>
      )
    }
    return null
  }

  render() {
    const { type, subTitle, author, date, image, seoName } = this.props

    return (
      <article id={ seoName } style={[styles.Article, styles[`Article--${type}`]]}>
        <section style={ styles.ArticleContent }>
          <header>
            <div style={ styles.ArticleMeta }>
              <span style={ styles.ArticleDate }>
                <time dateTime={ date }>{ this.displayDate() }</time>
              </span> <span style={ styles.ArticleAuthor }>{ author }</span>
            </div>
            <h1>
              { this.displayTitle() }
            </h1>
            <h2 style={ styles.ArticleSubTitle }>{subTitle}</h2>
          </header>
          { image ? <img onClick={ this.goToArticle } style={ styles.ArticleImage } src={image} alt="" /> : '' }
          <div style={ styles.ArticleText }>
            { this.displayText() }
          </div>
          { this.showTags() }
          { this.showCategories() }
        </section>
      </article>
    )
  }
}
