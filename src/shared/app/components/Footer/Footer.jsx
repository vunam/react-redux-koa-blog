import React, { Component } from 'react'

if (typeof window !== 'undefined') require('./Footer.scss')

export default class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <p className="Footer-info">
          Created by&nbsp;
          <a className="Footer-link" rel="noopener noreferrer" target="_blank" href="mailto:vu@strangelab.co.uk">Vu Nam</a>
          &nbsp; |&nbsp; View project on
          &nbsp;<a className="Footer-link" rel="noopener noreferrer" target="_blank" href="https://github.com/vunam/">Github</a>
        </p>
      </section>
    )
  }
}
