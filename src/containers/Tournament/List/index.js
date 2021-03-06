import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTournaments, createTournament } from '../../../store/tournaments/actions'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import Tournament from './Item'
import Create from './Create'

class List extends Component {
  componentDidMount = () => {
    this.props.getTournaments()
  }

  render() {
    const {
      tournaments: { loading, error, nodes },
    } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    return (
      <div className="container">
        <div className="cards">
          {nodes.map(tournament => (
            <Tournament
              date={tournament.state}
              id={tournament.id}
              key={tournament.id}
              title={tournament.name}
            />
          ))}
        </div>
        {error && <div> {get(error, 'tournament[0]', 'An error occured')}</div>}
        <Create />
      </div>
    )
  }
}

const mapStateToProps = ({ tournaments }) => {
  return {
    tournaments,
  }
}

const mapDispatchToProps = {
  getTournaments,
  createTournament,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)

List.propTypes = {
  getTournaments: PropTypes.func,
  tournaments: PropTypes.object,
}
