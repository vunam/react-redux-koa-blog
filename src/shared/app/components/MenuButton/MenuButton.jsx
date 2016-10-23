import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/navigation'

import Radium, { getTheme } from '../../../helpers/radium'

const styles = getTheme(require('./styles'))

// if (process.browser) require('./MenuButton.scss')

@connect(null, actions)
@Radium
export default class MenuButton extends Component {
  static propTypes = {
    opened: PropTypes.bool,
    openMenu: PropTypes.func,
    closeMenu: PropTypes.func
  }

  clickHandler = () => {
    const { opened, openMenu, closeMenu } = this.props
    if (opened) closeMenu()
    else openMenu()
  }

  render() {
    return (
      <button style={ styles.MenuButton } onClick={ this.clickHandler }>
        <div style={ styles.MenuButtonBar } />
        <div style={ styles.MenuButtonBar } />
        <div style={ styles.MenuButtonBar } />
      </button>
    )
  }
}
