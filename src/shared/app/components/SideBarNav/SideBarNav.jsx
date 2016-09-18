import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

if (process.browser) require('./SideBarNav.scss')

export default class SideBarNav extends Component {
  static propTypes = {
    opened: PropTypes.bool
  }

  render() {
    const { opened } = this.props
    return (
      <div className={`SideBarNav${opened ? ' is-open' : ''}`}>
        <div className="SideBarNav-inner">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Featured</Link></li>
            <li><Link to="/">Javascript</Link></li>
            <li><Link to="/">UX / Design</Link></li>
            <li><Link to="/">Personal</Link></li>
            <li><Link to="/">Travel</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
