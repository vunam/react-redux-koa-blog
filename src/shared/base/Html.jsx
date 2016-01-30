import 'babel-polyfill';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';

export default class Html extends Component {
  render() {
    const {component, bundle, store } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const state = JSON.stringify(store.getState())

    return (
      <html>
        <head>
          <title>Blog</title>
          <script dangerouslySetInnerHTML={{__html: `window.__store=${state};`}} charSet="UTF-8"/>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: content}} />
          <script src={bundle} charSet="UTF-8"/>
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  component: PropTypes.node
}
