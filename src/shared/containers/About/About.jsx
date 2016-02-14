import React, { Component } from 'react'
if (typeof window !== 'undefined') require('./About.scss')

export default class About extends Component {
  render() {
    return (
      <section className="About">
        <h1 className="About-title">React blog</h1>
        <p className="About-description">
          This is a ready to simple blog.
          Written with React, Redux, Koa and many more cool stuff.
        </p>
      </section>
    )
  }
}
