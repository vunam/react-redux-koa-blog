import React, { Component } from 'react'

if (typeof window !== 'undefined') require('./Header.scss')

export default class Header extends Component {
  render() {
    return (
      <section className="Header">
        <h1 className="Header-title">React blog</h1>
        <p className="Header-description">
          This is a ready to use simple blog.
          Written with React, Redux, Koa and many more cool stuff.
        </p>
      </section>
    )
  }
}
