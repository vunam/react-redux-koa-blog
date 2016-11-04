import 'babel-polyfill'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom/server'
import Helmet from 'react-helmet'
import { Style } from 'radium'
import Radium from '../helpers/radium'
import styles from './styles.js'

@Radium
export default class Html extends Component {

  render() {
    const { component, assetPath, store, type, location } = this.props
    const content = component ? ReactDOM.renderToString(component) : ''
    const state = JSON.stringify(store.getState())
    const head = Helmet.rewind()
    return (
      <html>
        <head>
          { head.title.toComponent() }
          { head.meta.toComponent() }
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i|Lora:700,700i" rel="stylesheet" />
          <script dangerouslySetInnerHTML={{ __html: `window.store=${state};` }} charSet="UTF-8" />
        </head>
        <body>
          <Style rules={ styles } />
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script src="/assets/js/tinymce/tinymce.min.js" />
          <script src={`/assets/${type}/bundle.js`} charSet="UTF-8" />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  component: PropTypes.node
}
