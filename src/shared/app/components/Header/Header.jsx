import React, { Component } from 'react'

import Radium from '../../../helpers/radium'
import styles from './styles'

@Radium
export default class Header extends Component {
  render() {
    return (
      <section style={ styles.Header }>
        <h1 style={ styles.HeaderTitle }>React blog</h1>
        <p style={ styles.HeaderDescription }>
          This is a ready to use simple blog.
          Written with React, Redux, Koa and more.
        </p>
      </section>
    )
  }
}
