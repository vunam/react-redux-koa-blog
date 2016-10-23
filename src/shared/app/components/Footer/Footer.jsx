import React, { Component } from 'react'

import Radium, { getTheme } from '../../../helpers/radium'

const styles = getTheme(require('./styles'))

@Radium
export default class Footer extends Component {
  render() {
    return (
      <section style={ styles.Footer }>
        <p style={ styles.FooterInfo }>
          Created by&nbsp;
          <a style={ styles.FooterLink } rel="noopener noreferrer" target="_blank" href="mailto:vu@strangelab.co.uk">Vu Nam</a>
          &nbsp; |&nbsp; View project on
          &nbsp;<a style={ styles.FooterLink } rel="noopener noreferrer" target="_blank" href="https://github.com/vunam/">Github</a>
        </p>
      </section>
    )
  }
}
