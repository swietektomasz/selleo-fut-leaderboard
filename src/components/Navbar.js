import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <header className="nav">
        <div className="nav__box">
          <NavLink className="nav__link" to="/home">
            Home
          </NavLink>
        </div>
        <div className="nav__box">
          <NavLink className="nav__link" to="/tournaments">
            Tournaments
          </NavLink>
        </div>
        <div className="nav__box">
          <NavLink className="nav__link" to="/home">
            Matches
          </NavLink>
        </div>
        <div className="nav__box">
          <NavLink className="nav__link" to="/home">
            Players
          </NavLink>
        </div>
      </header>
    )
  }
}

export default Navbar
