import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <NavLink className="link" to="/home">
          Home
        </NavLink>
        <NavLink className="link" to="/tournaments">
          Tournaments
        </NavLink>
        <NavLink className="link" to="/home">
          Matches
        </NavLink>
        <NavLink className="link" to="/home">
          Players
        </NavLink>
      </header>
    )
  }
}

export default Navbar
