import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <img src={""} alt="" />
        <h1>Oops!</h1>
        <h2>404</h2>
        <p>It seems you landed on a non-existing page.</p>
      </div>
    )
  }
}
