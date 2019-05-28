import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="table-row header">
          <div className="column">Games</div>
          <div className="column">Wins</div>
          <div className="column">Draws</div>
          <div className="column">Losses</div>
          <div className="column">Goals Scored</div>
          <div className="column">Goals Against</div>
          <div className="column">Goals Difference</div>
          <div className="column">Points</div>
        </div>
      </div>
    )
  }
}
