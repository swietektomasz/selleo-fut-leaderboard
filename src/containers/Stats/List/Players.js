import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Table from '../../../components/Table'

class Players extends Component {
  render() {
    const { stats, loading, error, history } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>Error</div>
    }

    return (
      <div className="container">
        Stats
        <div className="cards">
          {Object.entries(stats).map(([playerName, playerStats]) => (
            <div
              className="match__header"
              key={playerName}
              onClick={() => history.push(`/stats/${playerName}`)}
            >
              <div className="match__title">
                <h3>{playerName}</h3>
              </div>
              <Table body={Object.values(playerStats)} header={Object.keys(playerStats)} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Players)

Players.propTypes = {
  error: PropTypes.bool,
  history: PropTypes.object,
  loading: PropTypes.bool,
  stats: PropTypes.any,
}
