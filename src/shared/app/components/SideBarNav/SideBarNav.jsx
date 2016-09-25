import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../../../actions/navigation'

if (process.browser) require('./SideBarNav.scss')

@connect(null, actions)
export default class SideBarNav extends Component {
  static propTypes = {
    opened: PropTypes.bool,
    closeMenu: PropTypes.func
  }

  render() {
    const { opened, closeMenu } = this.props
    return (
      <div className={`SideBarNav${opened ? ' is-open' : ''}`}>
        <div className="SideBarNav-inner">
          <h3>Navigation</h3>
          <ul>
            <li><Link onClick={ closeMenu } to="/">Home</Link></li>
            <li><Link onClick={ closeMenu } to="/category/featured">Featured</Link></li>
            <li><Link onClick={ closeMenu } to="/category/javascript">Javascript</Link></li>
            <li><Link onClick={ closeMenu } to="/category/ux-design">UX / Design</Link></li>
            <li><Link onClick={ closeMenu } to="/category/personal">Personal</Link></li>
            <li><Link onClick={ closeMenu } to="/category/travel">Travel</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
