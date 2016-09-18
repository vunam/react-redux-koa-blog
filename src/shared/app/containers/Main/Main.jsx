import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SideBarNav from '../../components/SideBarNav/SideBarNav.jsx'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import MenuButton from '../../components/MenuButton/MenuButton.jsx'

if (process.browser) require('./Main.scss')

@connect((state) => ({
  opened: state.navigation.opened
}), null)
class Main extends Component {
  static propTypes = {
    opened: PropTypes.bool,
    children: PropTypes.node
  }

  render() {
    const { opened } = this.props
    return (
      <div className={`Main${opened ? ' is-slided' : ''}`}>
        <div className="Main-content">
          <SideBarNav opened={opened} />
          <MenuButton opened={opened} />
          <div className={`Main-overlay${opened ? ' is-visible' : ''}`} />
          <Header />
          { this.props.children }
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main
