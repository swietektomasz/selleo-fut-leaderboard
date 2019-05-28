import React from 'react'
import PropTypes from 'prop-types'

const Summary = props => {
  const { stats } = props
  return (
    <div className="container">
      Summary
      <div className="cards">
        {Object.keys(stats).map(player => (
          <div key={player}>
            <div>{stats[player].name}</div>
            <span>first: {stats[player][0]} </span>
            <span>second: {stats[player][1]} </span>
            <span>third: {stats[player][2]} </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Summary

Summary.propTypes = {
  stats: PropTypes.object,
}
