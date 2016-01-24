import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    return (
      <article className="Article">
        <header>
          <h1>Title here</h1>
          <h2>Sub title here</h2>
          <span><time datetime="2016-01-25 20:00">Jan 15</time></span>
          <span className="Article-author"></span>
        </header>
        <p>A description</p>
      </article>
    )
  }
}
