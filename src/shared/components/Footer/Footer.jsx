import React, { Component } from 'react'
if (typeof window !== 'undefined') require('./Footer.scss')

export default class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <p className="Footer-info">
          Created by <a className="Footer-link" target="_blank" href="mailto:vu@strangelab.co.uk">Vu Nam</a>
          &nbsp; |&nbsp;
          View project on <a className="Footer-link" target="_blank" href="https://github.com/vunam/">Github</a>
        </p>
      </section>
    )
  }
}
