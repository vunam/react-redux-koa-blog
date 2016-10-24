import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleRoot } from 'radium'
import SideBarNav from '../../components/SideBarNav/SideBarNav.jsx'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import MenuButton from '../../components/MenuButton/MenuButton.jsx'
import * as actions from '../../../actions/navigation'

import Radium, { getTheme } from '../../../helpers/radium'

const styles = getTheme(require('./styles'))

@connect((state) => ({
  opened: state.navigation.opened
}), actions)
@Radium
class Main extends Component {
  static propTypes = {
    opened: PropTypes.bool,
    children: PropTypes.node,
    closeMenu: PropTypes.func
  }

  closeSidebar = () => {
    const { closeMenu } = this.props
    closeMenu()
  }

  render() {
    const { opened } = this.props
    return (
      <StyleRoot>
        <div style={[styles.Main, (opened ? styles.MainIsSlided : null)] }>
          <div style={[styles.MainContent, (opened ? styles.MainContentIsSlided : null)]}>
            <SideBarNav opened={opened} />
            <MenuButton opened={opened} />
            <div onClick={ this.closeSidebar } style={ [styles.MainOverlay, (opened ? styles.MainOverlayIsVisible : null)] } />
            <Header />
            { this.props.children }
            <Footer />
          </div>
        </div>
      </StyleRoot>
    )
  }
}

export default Main
