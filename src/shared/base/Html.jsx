import 'babel-polyfill'
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom/server'
import Helmet from 'react-helmet'

export default class Html extends Component {

  render() {
    const {component, assetPath, store, type, location } = this.props
    const content = component ? ReactDOM.renderToString(component) : ''
    const state = JSON.stringify(store.getState())
    const head = Helmet.rewind()
    return (
      <html>
        <head>
          { head.title.toComponent() }
          { head.meta.toComponent() }
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <script dangerouslySetInnerHTML={{__html: `window.__store=${state};`}} charSet="UTF-8"/>
          {/*<link href='https://fonts.googleapis.com/css?family=Josefin+Sans:400,300,700' rel='stylesheet' type='text/css' />
          <link href='https://fonts.googleapis.com/css?family=Lora:700' rel='stylesheet' type='text/css' />*/}
          <link rel="stylesheet" type="text/css" media="screen" href={`/assets/${type}/styles.css`} />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: content}} />
          <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
          <script src={`/assets/${type}/bundle.js`} charSet="UTF-8"/>
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  component: PropTypes.node
}
