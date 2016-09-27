import React, { Component } from 'react'

// Find out why the occurrence of extract text plugin begins with Header.css
if (process.browser) require('../../../base/concise.scss')
if (process.browser) require('./Header.scss')

export default class Header extends Component {
  render() {
    return (
      <section className="Header">
        <h1 className="Header-title">React blog</h1>
        <p className="Header-description">
          This is a ready to use simple blog.
          Written with React, Redux, Koa and more.
        </p>
      </section>
    )
  }
}
