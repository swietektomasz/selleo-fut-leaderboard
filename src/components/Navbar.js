import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class Navbar extends Component {
  render() {
    const { history } = this.props

    return (
      <header className="nav">
        <div className="nav__box" onClick={() => history.push('/home/')}>
          home
        </div>
        <div className="nav__box" onClick={() => history.push('/tournaments/')}>
          tournaments
        </div>
        <div className="nav__box" onClick={() => history.push('/stats/')}>
          stats
        </div>
      </header>
    )
  }
}

Navbar.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Navbar)
