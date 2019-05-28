import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Row from './Row'

class Table extends Component {
  render() {
    const {
      activeTournament: { table },
    } = this.props

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
        {Object.entries(table).map(([playerName, playerData]) => {
          return <Row key={playerName} playerName={playerName} stats={playerData} />
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ tournaments: { activeTournament } }) => {
  return { activeTournament }
}

export default connect(
  mapStateToProps,
  null,
)(Table)

Table.propTypes = {
  activeTournament: PropTypes.object,
}
