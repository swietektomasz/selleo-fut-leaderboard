import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

export default class Table extends Component {
  render() {
    const { stats } = this.props

    return (
      <div>
        <div className="table-row header">
          <div className="column">Player name</div>
          <div className="column">Games</div>
          <div className="column">Wins</div>
          <div className="column">Draws</div>
          <div className="column">Losses</div>
          <div className="column">Goals Scored</div>
          <div className="column">Goals Against</div>
          <div className="column">Goals Difference</div>
          <div className="column">Points</div>
        </div>
        {Object.entries(stats).map(([playerName, playerData]) => {
          return <Row key={playerName} playerName={playerName} stats={playerData} />
        })}
      </div>
    )
  }
}

Table.propTypes = {
  stats: PropTypes.object,
}
