import React from 'react'

const Summary = props => {
  const { stats } = props
  console.log(stats['Kovson'][0])
  return (
    <div className="container">
      Summary
      <div className="cards">
        {Object.keys(stats).map(player => (
          <div key={player}>
            <div>{player}</div>
            <span>first: {stats[player][0].length} </span>
            <span>second: {stats[player][1].length} </span>
            <span>third: {stats[player][2].length} </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Summary
