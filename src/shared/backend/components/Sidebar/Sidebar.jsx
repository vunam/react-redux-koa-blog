import React, { Component, PropTypes } from 'react'

class Sidebar extends Component {

  static propTypes = {
    items: PropTypes.object
  }

  render() {
    return (
      <div className="Sidebar">
        Sidebar
      </div>
    )
  }
}

export default Sidebar
