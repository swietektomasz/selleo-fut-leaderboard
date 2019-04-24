import React, { Component } from 'react'

import Tournament from './Tournament'

const tournamentData = [
  {
    id: 1,
    title: 'Tournament 1',
    description: 'A tournament to end all tournaments',
    date: '22th of May at 5 PM',
  },
  {
    id: 2,
    title: 'Tournament 2',
    description: 'A tournament to end all tournaments',
    date: '22th of May at 5 PM',
  },
  {
    id: 3,
    title: 'Tournament 3',
    description: 'A tournament to end all tournaments',
    date: '22th of May at 5 PM',
  },
  {
    id: 4,
    title: 'Tournament 4',
    description: 'A tournament to end all tournaments',
    date: '22th of May at 5 PM',
  },
]

class List extends Component {
  render() {
    return (
      <div className="container">
        <div className="cards">
          {tournamentData.map(tournament => (
            <Tournament
              date={tournament.date}
              description={tournament.description}
              key={tournament.id}
              title={tournament.title}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default List
