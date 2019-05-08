import React from 'react'

export default function Row(player) {
  return (
    <div>
      <div className="table-row">
        <div className="column">{player.playerName}</div>
        <div className="column">{player.stats.games}</div>
        <div className="column">{player.stats.wins}</div>
        <div className="column">{player.stats.draws}</div>
        <div className="column">{player.stats.losses}</div>
        <div className="column">{player.stats.goals_scored}</div>
        <div className="column">{player.stats.goals_against}</div>
        <div className="column">{player.stats.goals_difference}</div>
        <div className="column">{player.stats.points}</div>
      </div>
    </div>
  )
}
