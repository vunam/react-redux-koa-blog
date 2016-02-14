import React, { Component } from 'react'
if (typeof window !== 'undefined') require('./About.scss')

export default class About extends Component {
  render() {
    return (
      <section className="About">
        <h1 className="About-title">React blog</h1>
        <p>Written with React, Redux, Koa and many more cool stuff. This is a ready to use simple, fast and stylish blog.</p>
      </section>
    )
  }
}
