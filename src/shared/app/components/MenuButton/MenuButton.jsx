import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/navigation'

if (process.browser) require('./MenuButton.scss')

@connect(null, actions)
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
      <button className="MenuButton" onClick={ this.clickHandler }>
        <div />
        <div />
        <div />
      </button>
    )
  }
}
