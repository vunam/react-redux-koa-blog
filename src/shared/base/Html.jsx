import 'babel-polyfill';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';

export default class Html extends Component {
  render() {
    const {component, bundle} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';

    return (
      <html>
        <head>
          <title>Blog</title>
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
