import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../../../actions/navigation'

import Radium, { getTheme } from '../../../helpers/radium'

const styles = getTheme(require('./styles'))

@connect(null, actions)
@Radium
export default class SideBarNav extends Component {
  static propTypes = {
    opened: PropTypes.bool,
    closeMenu: PropTypes.func,
    location: PropTypes.object
  }

  getLink(pathname, title) {
    const { closeMenu, location } = this.props
    return <li style={ styles.SideBarNavListItem }><Link onClick={ closeMenu } to={ pathname } style={ pathname === location.pathname ? styles.SideBarNavLinkSelected : styles.SideBarNavLink }>{ title }</Link></li>
  }

  render() {
    const { opened } = this.props
    return (
      <div style={[styles.SideBarNav, (opened ? styles.SideBarNavIsOpen : null)]}>
        <div style={ styles.SideBarNavInner }>
          <h3 style={ styles.SideBarNavTitle }>Navigation</h3>
          <ul style={ styles.SideBarNavList }>
            { this.getLink('/', 'Home') }
            { this.getLink('/category/featured', 'Featured') }
            { this.getLink('/category/javascript', 'Javascript') }
            { this.getLink('/category/ux-design', 'UX / Design') }
            { this.getLink('/category/personal', 'Personal') }
            { this.getLink('/category/travel', 'Travel') }
          </ul>
        </div>
      </div>
    )
  }
}
