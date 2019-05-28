import React from 'react'

export default function Row(props) {
  return (
    <div>
      <div className="table-row">
        <div className="column">{props.playerName}</div>
        <div className="column">{props.stats.games}</div>
        <div className="column">{props.stats.wins}</div>
        <div className="column">{props.stats.draws}</div>
        <div className="column">{props.stats.losses}</div>
        <div className="column">{props.stats.goals_scored}</div>
        <div className="column">{props.stats.goals_against}</div>
        <div className="column">{props.stats.goals_difference}</div>
        <div className="column">{props.stats.points}</div>
      </div>
    </div>
  )
}
