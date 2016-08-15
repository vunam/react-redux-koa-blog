import React, { Component, PropTypes } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
if (typeof window !== 'undefined') require('./Main.scss')

class Main extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div className="Main">
        <Sidebar />
        { this.props.children }
      </div>
    )
  }
}

export default Main
